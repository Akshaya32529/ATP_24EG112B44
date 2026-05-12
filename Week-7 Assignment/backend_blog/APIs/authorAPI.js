import exp from 'express'
import { UserModel } from '../models/userModel.js'
import { ArticleModel } from '../models/articleModel.js'
import { verifyToken } from '../middlewares/verifyToken.js'

export const authorApp = exp.Router()

//write article (protected)
authorApp.post("/article", verifyToken("AUTHOR"), async (req, res) => {
    try {

        //get article object from client
        const articleObj = req.body

        //logged in user
        let user = req.user

        //check if author exists
        let author = await UserModel.findById(articleObj.author)

        if (!author) {
            return res.status(404).json({
                message: "Invalid author"
            })
        }

        //check if logged in author matches
        if (author.email !== user.email) {
            return res.status(403).json({
                message: "You are not authorized"
            })
        }

        //create article
        const articleDoc = new ArticleModel(articleObj)

        //save article
        await articleDoc.save()

        //send response
        res.status(201).json({
            message: "Article created successfully",
            payload: articleDoc
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({
            message: "Server error"
        })
    }
})


//read all own articles
authorApp.get("/articles", verifyToken("AUTHOR"), async (req, res) => {
    try {

        //author id from token
        const authorIdOfToken = req.user?.id

        //find all articles of author
        const articles = await ArticleModel.find({
            author: authorIdOfToken
        })
            .populate("author")
            .populate("comments.user")

        //send response
        res.status(200).json({
            message: "Articles",
            payload: articles
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({
            message: "Server error"
        })
    }
})


//get single article by id
authorApp.get("/article/:id", verifyToken("AUTHOR"), async (req, res) => {
    try {

        //author id from token
        const authorIdToken = req.user?.id

        //find article
        const article = await ArticleModel.findOne({
            _id: req.params.id,
            author: authorIdToken
        })
            .populate("author")
            .populate("comments.user")

        //check article exists
        if (!article) {
            return res.status(404).json({
                message: "Article not found"
            })
        }

        //send response
        res.status(200).json({
            message: "Article",
            payload: article
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({
            message: "Server error"
        })
    }
})


//edit article
authorApp.put("/articles", verifyToken("AUTHOR"), async (req, res) => {
    try {

        //author id from token
        const authorIdToken = req.user?.id

        //modified article data
        const { articleId, title, category, content } = req.body

        //update article
        const modifiedArticle = await ArticleModel.findOneAndUpdate(
            {
                _id: articleId,
                author: authorIdToken
            },
            {
                $set: {
                    title,
                    category,
                    content
                }
            },
            {
                new: true
            }
        )

        //check article exists
        if (!modifiedArticle) {
            return res.status(403).json({
                message: "Not authorized to edit article"
            })
        }

        //send response
        res.status(200).json({
            message: "Article updated successfully",
            payload: modifiedArticle
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({
            message: "Server error"
        })
    }
})


//delete & restore article (soft delete)
authorApp.patch("/articles", verifyToken("AUTHOR"), async (req, res) => {
    try {

        //author id from token
        const authorIdToken = req.user?.id

        //data from frontend
        const { articleId, isArticleActive } = req.body

        //find article
        const articleofDB = await ArticleModel.findOne({
            _id: articleId,
            author: authorIdToken
        })

        //check article exists
        if (!articleofDB) {
            return res.status(404).json({
                message: "Article not found"
            })
        }

        //already same state
        if (isArticleActive === articleofDB.isArticleActive) {
            return res.status(200).json({
                message: "Article already in same state",
                payload: articleofDB
            })
        }

        //update status
        articleofDB.isArticleActive = isArticleActive

        //save
        await articleofDB.save()

        //send response
        res.status(200).json({
            message: isArticleActive
                ? "Article restored successfully"
                : "Article deleted successfully",

            payload: articleofDB
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({
            message: "Server error"
        })
    }
})