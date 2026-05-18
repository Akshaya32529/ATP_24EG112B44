# Blog App

A full-stack blog application with role-based access for readers, authors, and admins. Users can register, log in, read articles, and comment. Authors can create, edit, delete, and restore their own articles. Admins can view registered users and block or unblock user accounts.

## Tech Stack

#Frontend:

- React 19
- Vite
- React Router
- Zustand
- Axios
- React Hook Form
- React Hot Toast
- Tailwind CSS

#Backend:

- Node.js
- Express 5
- MongoDB with Mongoose
- JWT authentication
- bcryptjs password hashing
- cookie-parser
- multer
- Cloudinary
- CORS

## Features

- User registration with optional profile image upload
- Login and logout using HTTP-only JWT cookies
- Role-based protected routes
- Reader dashboard for browsing articles
- Article detail page with comments
- Users can add and delete their own comments
- Author dashboard
- Authors can write new articles
- Authors can edit their own articles
- Authors can soft-delete and restore their own articles
- Admin dashboard for user management
- Admins can block and unblock users/authors
- Active article filtering for public article lists
- Cloudinary image upload support for profile images

## User Roles
- USER : Read articles, view article details, add comments, and delete own comments.
- AUTHOR : Create, view, edit, delete, and restore own articles.
- ADMIN : View users/authors and block or unblock accounts.

> Registration currently allows `USER` and `AUTHOR`. Admin users must be created separately in the database or through a seed/manual process.

## Frontend Routes

- `/`: Home page. Public access.
- `/register`: Register page. Public access.
- `/login`: Login page. Public access.
- `/articles`: Discover all active articles. Authenticated users.
- `/article/:id`: Read a single article and its comments. Authenticated users.
- `/user-profile`: User profile/dashboard. Requires `USER`.
- `/author-profile`: Author dashboard. Requires `AUTHOR`.
- `/author-profile/articles`: Author's articles. Requires `AUTHOR`.
- `/author-profile/write-article`: Create article page. Requires `AUTHOR`.
- `/edit-article`: Edit article page. Used in the author article flow.
- `/admin-profile`: Admin dashboard. Requires `ADMIN`.
- `/unauthorized`: Unauthorized access page. Public access.

## Backend API Endpoints

Base URL locally:

```text
http://localhost:4000
```

Current deployed backend used in frontend API calls:

```text
https://atp-24eg112b44-1.onrender.com
```

### Auth Routes

Mounted at `/auth`.

- `POST /auth/users`: Register a user or author. Public access.
- `POST /auth/login`: Log in and set the JWT cookie. Public access.
- `GET /auth/logout`: Clear the JWT cookie. Authenticated access.
- `GET /auth/check-auth`: Check the current authenticated user. Requires `USER`, `AUTHOR`, or `ADMIN`.
- `PUT /auth/password`: Change password. Requires `USER`, `AUTHOR`, or `ADMIN`.

### User Routes

Mounted at `/user`.

- `GET /user/articles`: Get all active articles. Requires `USER`, `AUTHOR`, or `ADMIN`.
- `GET /user/article/:articleId`: Get a single article by ID. Requires `USER`, `AUTHOR`, or `ADMIN`.
- `PUT /user/articles`: Add a comment to an article. Requires `USER`.
- `DELETE /user/article/:articleId/comment/:commentId`: Delete own comment. Requires `USER`.
- `PUT /user/password`: Change password. Requires `USER`, `AUTHOR`, or `ADMIN`.

### Author Routes

Mounted at `/author`.

- `POST /author/article`: Create a new article. Requires `AUTHOR`.
- `GET /author/articles`: Get the logged-in author's articles. Requires `AUTHOR`.
- `GET /author/article/:id`: Get one owned article. Requires `AUTHOR`.
- `PUT /author/articles`: Edit an owned article. Requires `AUTHOR`.
- `PATCH /author/articles`: Soft-delete or restore an owned article. Requires `AUTHOR`.

### Admin Routes

Mounted at `/admin`.

- `GET /admin/users`: Get all users and authors. Requires `ADMIN`.
- `GET /admin/article`: Get all articles. Requires `ADMIN`.
- `PUT /admin/user/:id`: Block a user or author. Requires `ADMIN`.
- `PUT /admin/user-unblock/:id`: Unblock a user or author. Requires `ADMIN`.



## Environment Variables

Create a `.env` file inside `backend_blog`.

> Note: Several frontend components currently call the deployed Render backend URL directly. To make local development fully configurable, replace those hard-coded URLs with `BACKEND_URL` from `src/utils/config.js`.

## Installation and Setup

### 1. Clone or open the project

```bash
cd "Week-7 Assignment"
```

### 2. Install backend dependencies

```bash
cd backend_blog
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend_blog
npm install
```

### 4. Configure environment variables

Add the backend `.env` values listed above. Make sure MongoDB and Cloudinary credentials are valid.

### 5. Start the backend

The backend package currently has no `dev` or `start` script. Run it directly:

```bash
cd backend_blog
node server.js
```

The server starts on:

```text
http://localhost:4000
```

### 6. Start the frontend

```bash
cd frontend_blog
npm run dev
```

The Vite app usually starts on:

```text
http://localhost:5173
```

## Available Scripts

### Frontend
npm run dev       -- Start Vite development server
npm run build     -- Build production frontend
npm run preview   -- Preview production build
npm run lint      -- Run ESLint

### Backend
node server.js    --Start Express server
npm test          --Placeholder test script

## Authentication Flow

1. A user registers with a role of `USER` or `AUTHOR`.
2. Passwords are hashed using bcrypt before storing in MongoDB.
3. On login, the backend creates a JWT containing user ID, email, role, name, and profile image URL.
4. The JWT is stored in an HTTP-only cookie named `token`.
5. Protected backend routes use `verifyToken(...)` middleware to validate the cookie and check the allowed role.
6. The frontend stores the current user state using Zustand persistence.

## Image Uploads

Profile images are uploaded during registration using `multer` memory storage and Cloudinary.

Accepted image types:

- JPG
- PNG

Maximum file size:

text: 2 MB

Uploaded images are stored in the Cloudinary folder

## Deployment Notes

- The frontend includes a `vercel.json`, so it is prepared for Vercel deployment.
- The backend also includes a `vercel.json`, but the frontend currently points to a Render backend URL.
- Backend CORS allows:
  - `http://localhost:5173`
  - `https://atp-24-eg-112-b44.vercel.app`
  - other `vercel.app` origins
- Cookies are configured with:

```js
httpOnly: true
secure: true
sameSite: "none"
```

This is suitable for deployed HTTPS frontend/backend communication. For local HTTP-only development, cookie settings may need adjustment.

## Suggested Future Enhancements

- Add backend scripts such as `"start": "node server.js"` and `"dev": "nodemon server.js"`.
- Replace hard-coded frontend API URLs with `BACKEND_URL`.
- Add an admin creation/seed script.
- Add article image uploads.
- Add search, category filters, and pagination.
- Add automated tests for authentication, article CRUD, and admin actions.
