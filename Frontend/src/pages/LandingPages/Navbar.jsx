import React from "react";

export default function Navbar({ isMenuOpen, toggleMenu }) {
  return (
    <nav className="bg-white/95 backdrop-blur-sm w-full border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <span className="self-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            EduJavon
          </span>
        </a>
        <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="/login"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Kirish
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out`}
          id="navbar-cta"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 shadow-lg md:shadow-none">
            <li>
              <a
                href="#home"
                className="block py-3 px-4 text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 transition-all duration-200 font-medium"
                onClick={toggleMenu}
              >
                Bosh sahifa
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="block py-3 px-4 text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 transition-all duration-200 font-medium"
                onClick={toggleMenu}
              >
                Xususiyatlar
              </a>
            </li>
            <li>
              <a
                href="#books"
                className="block py-3 px-4 text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 transition-all duration-200 font-medium"
                onClick={toggleMenu}
              >
                Kitoblar
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-3 px-4 text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white md:border-0 md:hover:text-white md:p-0 transition-all duration-200 font-medium"
                onClick={toggleMenu}
              >
                Aloqa
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
