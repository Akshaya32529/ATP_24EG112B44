import jwt from "jsonwebtoken";
import { config } from "dotenv";

const { verify } = jwt;

config();

// middleware generator
export const verifyToken = (...allowedRoles) => {

    return (req, res, next) => {

        try {

            // get token from cookies
            const token = req.cookies?.token;

            // check token exists
            if (!token) {
                return res.status(401).json({
                    message: "Please login first"
                });
            }

            // verify token
            const decodedToken = verify(
                token,
                process.env.SECRET_KEY
            );
            
            console.log("DECODED TOKEN:", decodedToken);
console.log("TOKEN ROLE:", decodedToken.role);
console.log("ALLOWED ROLES:", allowedRoles);

            // if roles are provided, check authorization
            if (
                allowedRoles.length > 0 &&
                !allowedRoles
                    .map(role => role.toUpperCase())
                    .includes(decodedToken.role.toUpperCase())
            ) {

                return res.status(403).json({
                    message: "You're not authorized"
                });
            }

            // attach user to request
            req.user = decodedToken;

            next();

        } catch (err) {

            console.log(err);

            return res.status(401).json({
                message: "Invalid token"
            });
        }
    };
};