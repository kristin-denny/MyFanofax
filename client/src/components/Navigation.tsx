import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerIcon from '../assets/bars-3.svg';
import CloseIcon from '../assets/x-mark.svg';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="relative">
      {/* Hamburger/Close Icon for Small Screens */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 focus:outline-none group z-50 bg-gray-700 rounded-md border-2 border-transparent hover:border-blue-500 transition-colors duration-300"
      >
        <img
          src={isMenuOpen ? CloseIcon : HamburgerIcon}
          alt={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="w-6 h-6 transition duration-300 ease-in-out group-hover:filter brightness-0 invert"
        />
      </button>

      {/* Overlay for Menu Background */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-900 opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-full right-0 w-32 md:w-auto bg-gray-900 dark:bg-gray-800 md:flex md:space-x-2 md:static transition-all ease-in-out z-50 rounded-md shadow-lg`}
      >
        <li>
          <Link
            to="/"
            className={`block py-2 px-4 transition-colors duration-300 ${
              location.pathname === '/' ? 'text-blue-500 underline' : 'hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`block py-2 px-4 transition-colors duration-300 ${
              location.pathname === '/about' ? 'text-blue-500 underline' : 'hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className={`block py-2 px-4 transition-colors duration-300 ${
              location.pathname === '/login' ? 'text-blue-500 underline' : 'hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
