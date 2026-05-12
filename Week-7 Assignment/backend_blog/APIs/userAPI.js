import exp from 'express'
import { UserModel } from '../models/userModel.js'
import { ArticleModel } from "../models/articleModel.js"
import { verifyToken } from "../middlewares/verifyToken.js"
import { hash, compare } from 'bcryptjs'

export const userApp = exp.Router()

// Read all articles
userApp.get(
  "/articles",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  async (req, res) => {

    try {

      // get only active articles
      const articles = await ArticleModel.find({
        isArticleActive: true
      })
        .populate("author")
        .populate("comments.user")

      // send response
      res.status(200).json({
        message: "all articles",
        payload: articles
      })

    } catch (err) {

      console.log(err)

      res.status(500).json({
        message: "Server error"
      })
    }
  }
)


// Read article by ID
userApp.get(
  "/article/:articleId",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  async (req, res) => {

    try {

      const articleId = req.params.articleId

      // IMPORTANT:
      // removed isArticleActive:true
      // so deleted article can still be restored
      const article = await ArticleModel.findById(articleId)
        .populate("author")
        .populate("comments.user")

      // check article exists
      if (!article) {
        return res.status(404).json({
          message: "Article not found"
        })
      }

      // send response
      res.status(200).json({
        message: "article found",
        payload: article
      })

    } catch (err) {

      console.log(err)

      res.status(500).json({
        message: "Server error"
      })
    }
  }
)

userApp.get("/test", (req, res) => {
  res.send("NEW BACKEND CODE WORKING");
});

// Add comment
userApp.put(
  "/articles",
  verifyToken("USER"),
  async (req, res) => {

    try {

      // get article id and comment
      const { articleId, comment } = req.body

      // find article
      const articleDocument = await ArticleModel.findOne({
        _id: articleId,
        isArticleActive: true
      }).populate("comments.user")

      // article not found
      if (!articleDocument) {
        return res.status(404).json({
          message: "Article not found"
        })
      }

      // get user id
      const userId = req.user?.id

      // add comment
      articleDocument.comments.push({
        user: userId,
        comment: comment
      })

      // save
      await articleDocument.save()

      // populate comments
      await articleDocument.populate("comments.user")

      // send response
      res.status(200).json({
        message: "Comment added successfully",
        payload: articleDocument
      })

    } catch (err) {

      console.log(err)

      res.status(500).json({
        message: "Server error"
      })
    }
  }
)


// Delete comment
userApp.delete(
  "/article/:articleId/comment/:commentId",
  verifyToken("USER"),
  async (req, res) => {

    try {

      const { articleId, commentId } = req.params

      const userId = req.user?.id

      // find article
      const articleDocument = await ArticleModel.findById(articleId)

      // article not found
      if (!articleDocument) {
        return res.status(404).json({
          message: "Article not found"
        })
      }

      // find comment
      const comment = articleDocument.comments.id(commentId)

      // comment not found
      if (!comment) {
        return res.status(404).json({
          message: "Comment not found"
        })
      }

      // authorization check
      if (comment.user.toString() !== userId) {
        return res.status(403).json({
          message: "Unauthorized to delete this comment"
        })
      }

      // remove comment
      articleDocument.comments.pull(commentId)

      // save
      await articleDocument.save()

      // populate comments
      await articleDocument.populate("comments.user")

      // send response
      res.status(200).json({
        message: "Comment deleted successfully",
        payload: articleDocument
      })

    } catch (error) {

      console.log(error)

      res.status(500).json({
        message: "Error deleting comment",
        error: error.message
      })
    }
  }
)


// Change password
userApp.put(
  "/password",
  verifyToken("USER", "ADMIN", "AUTHOR"),
  async (req, res) => {

    try {

      // get passwords
      const { currentPassword, newPassword } = req.body

      // find user
      const user = await UserModel.findById(req.user?.id)

      // check current password
      const isMatched = await compare(
        currentPassword,
        user.password
      )

      // invalid password
      if (!isMatched) {
        return res.status(401).json({
          message: "Invalid current password"
        })
      }

      // hash new password
      user.password = await hash(newPassword, 12)

      // save
      await user.save()

      // send response
      res.status(200).json({
        message: "Password changed successfully"
      })

    } catch (err) {

      console.log(err)

      res.status(500).json({
        message: "Server error"
      })
    }
  }
)