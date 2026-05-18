 Week 4: Security, Authentication & Content Management

- Authentication: Implementing User Registration and Login with password hashing.
- Security: Using JSON Web Tokens (JWT) and HTTP-Only Cookies for session management.
- Authorization: Role-Based Access Control (RBAC) using custom middleware.
- Complex Data Modeling: Relational data handling in MongoDB using Mongoose References and Population.



|middlewares/VerifyToken.js- JWT validation and Role-based authorization logic
APIs/CommonAPI.js-Public routes for registration, login, and logout. 
APIs/AuthorAPI.js- Protected routes for article management (CRUD). 
models/ArticleModel.js-Schema for articles with nested comments and user references. 
server.js-Main entry point with advanced global error handling.



 Features & Implementation

 1. Security & Authentication
- Bcryptjs: Used for salting and hashing passwords (12 rounds) before storage.
- JWT (JSON Web Tokens): Signed tokens contain user identity and roles, enabling stateless authentication.
- Cookies: Tokens are sent via `httpOnly` cookies to mitigate XSS (Cross-Site Scripting) risks.

 2. Authorization (RBAC)
- A custom `verifyToken` middleware ensures that only authenticated users with the correct role (e.g., `AUTHOR`, `USER`) can access specific endpoints.
- Ownership verification: Ensuring authors can only modify or delete their own articles.

3. Article Management System
- Schemas: Articles include nested `commentSchema` and `timestamps` for tracking creation/updates.
- Soft Delete: Implementation of `isArticleActive` flag to allow data recovery and audit trails.
- CRUD Logic: Authors can publish, edit, and toggle the status of their articles.


