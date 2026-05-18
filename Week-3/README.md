# Week 3 Assignment: Backend API with MongoDB and JWT

This project is a backend application built using Node.js, Express.js, MongoDB, and Mongoose. It includes user authentication with JWT, cookie-based token storage, protected routes, product CRUD operations, and a simple cart feature for users.

The main goal of this assignment is to understand how to create REST APIs, connect an Express server to MongoDB, define schemas using Mongoose, validate data, hash passwords, generate authentication tokens, and protect selected routes.

## Features

- User registration and login.
- Password hashing using `bcryptjs`.
- JWT token generation after successful login.
- Token storage using HTTP-only cookies.
- Protected user routes using middleware.
- Product create, read, update, and delete APIs.
- Add products to the logged-in user's cart.
- Mongoose schema validation for users and products.
- Centralized error handling in the server.

## Files

`server.js` is the main entry point of the application. It creates the Express app, enables JSON parsing, adds cookie parsing middleware, connects the application to MongoDB using the database URL from `.env`, forwards requests to user and product APIs, starts the server on port `4000`, and handles application errors.

`APIs/UserAPI.js` contains all user-related routes. It includes routes for creating users, logging in, reading all users, reading the logged-in user's details, updating users, deleting users, and adding products to the user's cart. Most user routes are protected using the token verification middleware.

`APIs/ProductAPI.js` contains all product-related routes. It provides APIs to create a product, read all products, read one product by MongoDB id, update a product, and delete a product.

`models/UserModel.js` defines the user schema and user model. The schema includes username, password, email, age, and cart. The cart stores product references using MongoDB ObjectId, which allows the user data to be populated with product details.

`models/productModel.js` defines the product schema and product model. Each product contains product id, product name, price, and brand. The product price has validation rules with minimum and maximum allowed values.

`middlewares/verifyToken.js` contains the middleware used to protect routes. It reads the JWT token from cookies, verifies it using the secret key, and attaches the decoded user information to the request object.

`req.http` contains sample HTTP requests for testing the APIs. It can be used with the REST Client extension in VS Code to test user login, protected routes, product APIs, and cart operations.

`package.json` contains project dependency information. It lists the packages required for the application, including Express, Mongoose, dotenv, bcryptjs, jsonwebtoken, and cookie-parser.

`.env` stores environment variables such as the port number, MongoDB connection URL, and JWT secret key. This file should not be shared publicly because it contains sensitive configuration values.

## Environment Variables

Create a `.env` file in the project root and add:

```env
PORT=4000
DB_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
```



## API Overview

User APIs are available under `/user-api`. They handle user creation, login, reading user data, updating users, deleting users, and adding products to the user's cart.

Product APIs are available under `/product-api`. They handle creating products, reading products, updating product details, and deleting products.

After login, the JWT token is stored in a cookie named `token`. Protected routes use this cookie to verify whether the user is logged in.


## Testing

Use the `req.http` file to test the APIs from VS Code. First login with valid user credentials, then test protected routes such as reading users or adding a product to the cart. For product update, delete, and cart operations, use the MongoDB ObjectId of the product or user document.

