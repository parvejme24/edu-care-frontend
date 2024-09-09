import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function NavbarLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-blue-500 border-b-2 border-blue-500 pb-1"
          : "text-gray-700 hover:text-blue-500 transition-colors duration-300"
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const navItems = (
    <>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/colleges">Colleges</NavbarLink>
      <NavbarLink to="/admission">Admission</NavbarLink>
      <NavbarLink to="/my-college">My College</NavbarLink>
    </>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left side - Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to={"/"}>EduCare</Link>
        </div>

        {/* Middle - Navigation Links (for large devices) */}
        <div className="hidden lg:flex space-x-8">{navItems}</div>

        {/* Right side - Register Button (for large devices) */}
        <div className="hidden lg:block">
          <NavLink
            to="/register"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
          >
            Register
          </NavLink>
        </div>

        {/* Hamburger Icon (for small and medium devices) */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none transform hover:scale-110 transition-transform duration-300"
          >
            {menuOpen ? (
              <FaTimes className="h-8 w-8 text-blue-600" />
            ) : (
              <FaBars className="h-8 w-8 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 w-full animate-slide-down"
        >
          <div className="flex flex-col space-y-4">
            {navItems}
            <NavLink
              to="/register"
              onClick={toggleMenu}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105 text-center"
            >
              Register
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
