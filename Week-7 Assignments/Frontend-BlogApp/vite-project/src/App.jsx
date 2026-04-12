import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";
import AuthorProfile from "./Components/AuthorProfile";
import AuthorArticles from "./Components/AuthorArticles";
import EditArticle from "./Components/EditArticle";
import WriteArticles from "./Components/WriteArticles";
import ArticleByID from "./Components/ArticleByID";
import { Toaster } from "react-hot-toast";
import Unauthorized from "./Components/Unauthorized";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "user-profile",
          element: (
            <ProtectedRoute allowedRoles={["USER"]}>
              <UserProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "author-profile",
          element: (
            <ProtectedRoute allowedRoles={["AUTHOR"]}>
              <AuthorProfile />
            </ProtectedRoute>
          ),

          children: [
            {
              index: true,
              element: <AuthorArticles />,
            },
            {
              path: "articles",
              element: <AuthorArticles />,
            },
            {
              path: "write-article",
              element: <WriteArticles />,
            },
          ],
        },
        {
          path: "article/:id",
          element: <ArticleByID />,
        },
        {
          path: "edit-article",
          element: <EditArticle />,
        },
        {
          path: "unauthorized",
          element: <Unauthorized />,
        },
      ],
    },
  ]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routerObj} />
    </div>
  );
}

export default App;