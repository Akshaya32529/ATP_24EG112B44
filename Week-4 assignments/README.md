# Week 4: Security, Authentication & Content Management

This week's assignments focused on building a secure, production-ready backend with robust authentication, authorization, and a complex content management system (Blog/Article system).

## 🚀 Key Learning Objectives
- **Authentication**: Implementing User Registration and Login with password hashing.
- **Security**: Using JSON Web Tokens (JWT) and HTTP-Only Cookies for session management.
- **Authorization**: Role-Based Access Control (RBAC) using custom middleware.
- **Complex Data Modeling**: Relational data handling in MongoDB using Mongoose References and Population.

---

## 🛠️ Project Structure

| File/Folder | Purpose |
| :--- | :--- |
| `middlewares/VerifyToken.js` | JWT validation and Role-based authorization logic. |
| `APIs/CommonAPI.js` | Public routes for registration, login, and logout. |
| `APIs/AuthorAPI.js` | Protected routes for article management (CRUD). |
| `models/ArticleModel.js` | Schema for articles with nested comments and user references. |
| `server.js` | Main entry point with advanced global error handling. |

---

## 📦 Features & Implementation

### 1. Security & Authentication
- **Bcryptjs**: Used for salting and hashing passwords (12 rounds) before storage.
- **JWT (JSON Web Tokens)**: Signed tokens contain user identity and roles, enabling stateless authentication.
- **Cookies**: Tokens are sent via `httpOnly` cookies to mitigate XSS (Cross-Site Scripting) risks.

### 2. Authorization (RBAC)
- A custom `verifyToken` middleware ensures that only authenticated users with the correct role (e.g., `AUTHOR`, `USER`) can access specific endpoints.
- Ownership verification: Ensuring authors can only modify or delete their own articles.

### 3. Article Management System
- **Schemas**: Articles include nested `commentSchema` and `timestamps` for tracking creation/updates.
- **Soft Delete**: Implementation of `isArticleActive` flag to allow data recovery and audit trails.
- **CRUD Logic**: Authors can publish, edit, and toggle the status of their articles.

### 4. Advanced Error Handling
The `server.js` includes a robust error-handling middleware that translates low-level Mongoose errors into user-friendly responses:
- **Error 11000**: Dynamic handling of duplicate key violations (e.g., "Email already exists").
- **Validation/Cast Errors**: Detailed feedback for malformed requests or invalid IDs.

---

## 💻 How to Run

### 1. Environment Setup
Create a `.env` file in the root directory:
```env
DB_URL=mongodb://localhost:27017/blog_db
PORT=5000
SECRET_KEY=your_secret_key
```

### 2. Installation & Execution
```bash
# Install dependencies
npm install

# Start the server
node server.js
```

---
*Created as part of the ATP_24EG112B44 Assignments.*
