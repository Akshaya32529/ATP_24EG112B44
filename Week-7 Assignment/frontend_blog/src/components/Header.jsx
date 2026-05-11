import { NavLink } from "react-router";
import { useAuth } from "../store/authStore";

function Header() {
  const { isAuthenticated, currentUser, logout } = useAuth();

  const linkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              BlogApp
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-1 sm:space-x-4">
            <NavLink to="/" className={linkStyles}>
              Home
            </NavLink>

            {!isAuthenticated ? (
              <>
                <NavLink to="/register" className={linkStyles}>
                  Register
                </NavLink>
                <NavLink to="/login" className={linkStyles}>
                  Login
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/articles" className={linkStyles}>
                  Articles
                </NavLink>
                
                {currentUser?.role === "USER" && (
                  <NavLink to="/user-profile" className={linkStyles}>
                    Profile
                  </NavLink>
                )}

                {currentUser?.role === "AUTHOR" && (
                  <NavLink to="/author-profile" className={linkStyles}>
                    Dashboard
                  </NavLink>
                )}

                {currentUser?.role === "ADMIN" && (
                  <NavLink to="/admin-profile" className={linkStyles}>
                    Admin
                  </NavLink>
                )}

                <button
                  onClick={logout}
                  className="ml-2 px-4 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-300 cursor-pointer"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;