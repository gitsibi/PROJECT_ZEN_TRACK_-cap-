import React, { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const NavBar = ({ darkMode, setDarkMode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`${darkMode ? 'bg-white text-black' : 'bg-violet-500 text-white'} py-4 px-6`}>
        <div className="flex items-center justify-between w-full">
          {/* Logo and title */}
          <div className='flex items-center gap-2'>
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
                           <circle cx="20" cy="20" r="20" fill="url(#logo-gradient)" />
                           <circle cx="20" cy="20" r="16" fill="white" className="dark:fill-gray-900" />
                           <path d="M20 10V20L26 26" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-violet-400" />
                           <circle cx="20" cy="8" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="26" cy="10" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="30" cy="16" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="32" cy="20" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="30" cy="26" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="26" cy="30" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="20" cy="32" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="14" cy="30" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="10" cy="26" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="8" cy="20" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="10" cy="14" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <circle cx="14" cy="10" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
                           <defs>
                           <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#c4b5fd" />
                              <stop offset="1" stopColor="#7c3aed" />
                           </linearGradient>
                           </defs>
                        </svg>

                          <div className={`${darkMode ? 'bg-white text-black text-xl font-semibold  whitespace-nowrap': 'text-xl font-semibold text-white whitespace-nowrap'}`}>Zen Track</div>
                     </div>


          {/* Mobile controls */}
          <div className="flex items-center md:hidden gap-4 ml-auto">
            <div className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
               <SunIcon className={`${darkMode ? 'text-black': 'text-white'}"h-6 w-6 transition duration-300"`} />
            ) : (
               <MoonIcon className={`${darkMode ? 'text-black hover:bg-yellow-300': 'text-white hover:bg-yellow-300'}"h-6 w-6 transition duration-300"`} />
              )}
            </div>
            <button
              onClick={toggleMenu}
              type="button"
              className={`${darkMode ? 'text-black hover:text-grey-700': 'text-violet-500' }" focus:outline-none"`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center w-full">
            <ul className="flex space-x-6 items-center">
              <li><NavLink to="/" className="font-semibold hover:text-yellow-300 transition-colors duration-200">Home</NavLink></li>
              <li><NavLink to="/features" className="font-semibold hover:text-yellow-300 transition-colors duration-200">Features</NavLink></li>
              <li><NavLink to="/about" className="font-semibold hover:text-yellow-300 transition-colors duration-200">About</NavLink></li>

              {isAuthenticated ? (
                <li>
                  <button className="bg-white border border-white rounded-lg px-4 py-2 text-violet-600 font-semibold hover:bg-gray-200 hover:text-violet-900">
                    <NavLink to="/logout">Sign In</NavLink>
                  </button>
                </li>
              ) : (
                <>
                  <li><NavLink to="/login" className="font-semibold hover:text-yellow-300 transition-colors duration-200">Sign In</NavLink></li>
                  <li>
                  <button className={`${darkMode ? "mr-auto text-white bg-black border border-black rounded-lg px-4 py-2 font-semibold hover:bg-gray-200 hover:text-black" : 'text-violet-500 bg-white border border-white rounded-lg px-4 py-2  font-semibold hover:bg-gray-200 hover:text-violet-800'}`}>
                  <NavLink to="/signup" >Sign Up</NavLink>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Dark mode toggle for desktop */}
          <div className="hidden md:block cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <SunIcon className={`${darkMode ? 'text-black': 'text-white'}"h-6 w-6 transition duration-300"`} />
            ) : (
              <MoonIcon className={`${darkMode ? 'text-black hover:bg-yellow-300': 'text-white hover:bg-yellow-300'}"h-6 w-6 transition duration-300"`} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li><NavLink to="/" onClick={() => setIsOpen(false)} className="ml-12 font-semibold hover:text-yellow-300">Home</NavLink></li>
              <li><NavLink to="/features" onClick={() => setIsOpen(false)} className="ml-12 font-semibold hover:text-yellow-300">Features</NavLink></li>
              <li><NavLink to="/about" onClick={() => setIsOpen(false)} className="ml-12 font-semibold hover:text-yellow-300">About</NavLink></li>

              {isAuthenticated ? (
                <li>
                  <button className="ml-8 bg-white border border-white rounded-lg px-4 py-2 text-violet-600 font-semibold hover:bg-gray-200 hover:text-violet-900">
                    <NavLink to="/logout" onClick={() => setIsOpen(false)}>Sign Out</NavLink>
                  </button>
                </li>
              ) : (
                <>
                  <li><NavLink to="/login" onClick={() => setIsOpen(false)} className="ml-12 font-semibold hover:text-yellow-300">Sign In</NavLink></li>
                  <li>
                    <button className={`${darkMode ? " text-black ml-8 bg-black border border-black rounded-lg px-4 py-2 font-semibold hover:bg-gray-200 hover:text-black" : 'text-violet-500 ml-8 bg-white border border-white rounded-lg px-4 py-2  font-semibold hover:bg-gray-200 hover:text-violet-800'}`}>
                      <NavLink to="/signup" onClick={() => setIsOpen(false)}>Sign Up</NavLink>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
