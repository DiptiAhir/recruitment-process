import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, isAdmin, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate(); // Hook for navigation

  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove stored authentication token
    setIsLoggedIn(false); // Update context state
    navigate("/login"); // Redirect to login page
  };

  // Define links for both admin and candidate
  const adminLinks = [
    { to: "/admin-dashboard", label: "Home" },
    { to: "/job-requisition", label: "Job Requisition" },
    { to: "/application-review", label: "Application Review" },
    { to: "/offer-letter", label: "Offer Letter" },
    { to: "/onboarding", label: "Onboarding" },
  ];

  const candidateLinks = [
    { to: "/candidate-dashboard", label: "Home" },
    { to: "/jobs", label: "Available Jobs" },
    { to: "/applied-jobs", label: "My Applications" },
  ];

  const navLinks = isAdmin ? adminLinks : candidateLinks;

  return (
    <nav className="bg-indigo-700 text-white py-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-white hover:text-indigo-200 transition"
        >
          <img src="HLogo.png" alt="Logo" className="h-8" />
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden sm:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-white hover:text-indigo-200 transition"
              activeClassName="underline font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
          {!isLoggedIn ? (
            <NavLink
              to="/login"
              className="text-white hover:text-indigo-200 transition"
              activeClassName="underline font-semibold"
            >
              Login
            </NavLink>
          ) : (
            <NavLink
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="text-white  hover:text-indigo-200 transition"
              activeClassName="underline font-semibold"
            >
              Logout
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-indigo-700 bg-opacity-90 z-50">
          <div className="flex justify-end p-6">
            <button onClick={toggleMenu} className="text-white text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-16">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-white text-xl hover:text-indigo-200 transition"
                activeClassName="underline font-semibold"
                onClick={toggleMenu}
              >
                {link.label}
              </NavLink>
            ))}
            {!isLoggedIn ? (
              <NavLink
                to="/login"
                className="text-white text-xl hover:text-indigo-200 transition"
                activeClassName="underline font-semibold"
                onClick={toggleMenu}
              >
                Login
              </NavLink>
            ) : (
              <NavLink
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-white text-xl hover:text-indigo-200 transition"
                activeClassName="underline font-semibold"
              >
                Logout
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
