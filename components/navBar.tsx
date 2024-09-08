import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed top-0 w-full z-10 shadow">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-black font-bold text-xl">
          <a href="/" className="hover:text-gray-300">Dealdrop</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-black hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="/auth/login"
            className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-500"
          >
            Log in
          </a>
          <a
            href="/auth/register"
            className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-500"
          >
            Sign up
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 space-y-2">
          <a
            href="/"
            className="block text-black hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="/auth/login"
            className="block bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-500"
          >
            Log in
          </a>
          <a
            href="/auth/register"
            className="block bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-500"
          >
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;