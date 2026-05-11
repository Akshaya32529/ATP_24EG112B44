import exp from 'express'
import { UserModel } from '../models/userModel.js'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'

const { sign } = jwt

export const commonApp = exp.Router()

// allowed roles
let allowedRoles = ["USER", "AUTHOR"]


// ================= REGISTER =================
commonApp.post("/users", async (req, res, next) => {
    try {

        console.log("REQ BODY:", req.body)

        // get user data
        const newUser = req.body

        // validate role
        if (!newUser.role || !allowedRoles.includes(newUser.role.toUpperCase())) {
            return res.status(400).json({
                message: "Invalid role"
            })
        }

        // check existing user
        const existingUser = await UserModel.findOne({
            email: newUser.email
        })

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        // hash password
        newUser.password = await hash(newUser.password, 12)

        // uppercase role
        newUser.role = newUser.role.toUpperCase()

        // create document
        const newUserDoc = new UserModel(newUser)

        // save
        await newUserDoc.save()

        // response
        res.status(201).json({
            message: "User registered successfully"
        })

    } catch (err) {

        console.log("Registration Error:", err)

        res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }
})


// ================= LOGIN =================
commonApp.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body

        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(401).json({
                message: "Invalid email"
            })
        }

        if (user.isUserActive === false) {
            return res.status(403).json({
                message: "Your account has been blocked by admin"
            })
        }

        const isMatched = await compare(password, user.password)

        if (!isMatched) {
            return res.status(401).json({
                message: "Invalid password"
            })
        }

        const signedToken = sign(
            {
                id: user._id,
                email: user.email,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName,
                profileImageUrl: user.profileImageUrl
            },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        )

        res.cookie("token", signedToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        })

        let userObj = user.toObject()

        delete userObj.password

        res.status(200).json({
            message: "Login successful",
            payload: userObj,
            user: userObj
        })

    } catch (err) {

        console.log("Login Error:", err)

        res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }
})


// ================= LOGOUT =================
commonApp.get("/logout", async (req, res) => {

    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })

    res.status(200).json({
        message: "Logout successful"
    })
})


// ================= CHECK AUTH =================
commonApp.get(
    "/check-auth",
    verifyToken("USER", "AUTHOR", "ADMIN"),
    async (req, res) => {

        res.status(200).json({
            message: "Authenticated",
            payload: req.user
        })
    }
)


// ================= CHANGE PASSWORD =================
commonApp.put(
    "/password",
    verifyToken("USER", "AUTHOR", "ADMIN"),
    async (req, res) => {

        try {

            const { currentPassword, newPassword } = req.body

            const user = await UserModel.findById(req.user?.id)

            const isMatched = await compare(currentPassword, user.password)

            if (!isMatched) {
                return res.status(401).json({
                    message: "Invalid current password"
                })
            }

            user.password = await hash(newPassword, 12)

            await user.save()

            res.status(200).json({
                message: "Password changed successfully"
            })

        } catch (err) {

            console.log("Password Change Error:", err)

            res.status(500).json({
                message: "Server Error",
                error: err.message
            })
        }
    }
)