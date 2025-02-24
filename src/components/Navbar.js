import { NavLink } from 'react-router-dom';
import LoginSignupPage from '../Pages/Login';

const Navbar = () => (
  <nav className="bg-indigo-700 text-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center px-4">
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold text-white hover:text-indigo-200 transition">
        Hiring Process
      </NavLink>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className="text-white hover:text-indigo-200 transition"
          activeClassName="underline font-semibold"
        >
          Home
        </NavLink>
        <NavLink
          to="/job-requisition"
          className="text-white hover:text-indigo-200 transition"
          activeClassName="underline font-semibold"
        >
          Job Requisition
        </NavLink>
        <NavLink
          to="/resume-review"
          className="text-white hover:text-indigo-200 transition"
          activeClassName="underline font-semibold"
        >
          Resume Review
        </NavLink>
        <NavLink
          to="/offer-letter"
          className="text-white hover:text-indigo-200 transition"
          activeClassName="underline font-semibold"
        >
          Offer Letter
        </NavLink>
        <NavLink
          to="/onboarding"
          className="text-white hover:text-indigo-200 transition"
          activeClassName="underline font-semibold"
        >
          Onboarding
        </NavLink>
        <NavLink
          to="/login"
          className="text-white hover:text-indigo-200 transition"
          activeClassName="underline font-semibold"
        >
          Login
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden text-white focus:outline-none"
        aria-label="Open Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </nav>
);

export default Navbar;
