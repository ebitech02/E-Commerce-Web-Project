import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth0(); // Destructure isAuthenticated and logout

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Handle logout and redirect to homepage
  const handleLogout = () => {
    // Pass the correct returnTo URL, which will redirect the user to the homepage
    logout({
      returnTo: window.location.origin, // Ensures redirect to homepage after logout
    });
  };

  return (
    <nav className="bg-black/95 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="text-2xl font-bold">TF</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-400">Cart</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-400">Contact</Link>
          </li>

          {/* Show logout button if the user is authenticated */}
          {isAuthenticated && (
            <li>
              <button 
                onClick={handleLogout} 
                className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-500">
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col space-y-2"
          onClick={toggleMobileMenu}
        >
          <span className="w-6 h-0.5 bg-white transition-transform duration-300 transform 
            ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
          <span className="w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}"></span>
          <span className="w-6 h-0.5 bg-white transition-transform duration-300 transform 
            ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-90 z-50">
          <ul
            className="flex flex-col items-center justify-center h-full space-y-8 text-white"
            onClick={toggleMobileMenu}
          >
            <li>
              <Link to="#" className="block text-2xl hover:text-gray-400 transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="#" className="block text-2xl hover:text-gray-400 transition duration-300">About</Link>
            </li>
            <li>
              <Link to="#" className="block text-2xl hover:text-gray-400 transition duration-300">Services</Link>
            </li>
            <li>
              <Link to="#" className="block text-2xl hover:text-gray-400 transition duration-300">Contact</Link>
            </li>
            {/* Show logout button if authenticated in mobile view */}
            {isAuthenticated && (
              <li>
                <button 
                  onClick={handleLogout} 
                  className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-500">
                  Logout
                </button>
              </li>
            )}
          </ul>
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={toggleMobileMenu}
          >
            &times;
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
