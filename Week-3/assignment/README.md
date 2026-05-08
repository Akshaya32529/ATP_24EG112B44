# Week 3: Backend Development with MongoDB & Mongoose

This week focused on integrating a NoSQL database (MongoDB) into an Express application using the **Mongoose** Object Data Modeling (ODM) library.

## 🚀 Key Learning Objectives
- **Mongoose Integration**: Connecting Express to a MongoDB cluster.
- **Data Modeling**: Designing schemas with built-in and custom validations.
- **RESTful CRUD APIs**: Implementing Create, Read, Update, and Delete operations.
- **Error Handling**: Centralized middleware for database and validation errors.

---

## 🛠️ Project Structure

| File/Folder | Purpose |
| :--- | :--- |
| `server.js` | Main entry point; database connection and server initialization. |
| `models/` | Contains Mongoose Schemas and Models (e.g., `productModel.js`). |
| `APIs/` | Express Routers for handling product-related business logic. |
| `req.http` | HTTP client file for testing API endpoints. |

---

## 📦 Features & Implementation

### 1. Product Schema & Validation
The `productModel.js` defines a strict structure for product data:
- **Fields**: `productId`, `productName`, `price`, and `brand`.
- **Validation**:
  - `price`: Minimum 10,000 and Maximum 50,000.
  - `required`: Custom error messages for missing fields.

### 2. CRUD Endpoints
- **Create**: `POST /product-api/products` - Adds a new product to the database.
- **Read All**: `GET /product-api/products` - Retrieves all stored products.
- **Read One**: `GET /product-api/products/:id` - Fetches a specific product by its MongoDB `_id`.
- **Update**: `PUT /product-api/products/:id` - Modifies an existing product (runs validators on update).
- **Delete**: `DELETE /product-api/products/:id` - Removes a product from the collection.

### 3. Centralized Error Handling
A specialized middleware in `server.js` catches:
- **ValidationError**: Triggered when schema constraints are violated.
- **CastError**: Triggered when an invalid MongoDB ObjectId is provided in the URL.
- **Generic Errors**: Provides a fallback for 500 Server Errors.

---

## 💻 How to Run

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on port 27017)

### Steps
1. Navigate to the directory:
   ```bash
   cd Week-3/assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Test the APIs using the provided `APIs/req.http` file.

---
*Created as part of the ATP_24EG112B44 Assignments.*
