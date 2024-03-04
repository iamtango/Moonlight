import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" top-0 ">
      <div className="inner flex justify-between border-gray-200 shadow-md top-0 h-20 px-2 md:px-8">
        <div className="flex items-center">
          <img
            src="https://img.icons8.com/3d-fluency/94/natural-food.png"
            alt="natural-food"
            className="w-14 h-14"
          />
          <a
            to="/"
            className="text-lg font-semibold text-gray-800 ml-2 md:ml-4">
            Moonlight
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a to="/" className="flex items-center text-gray-800">
                <img
                  src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/external-home-essentials-tanah-basah-basic-outline-tanah-basah-2.png"
                  alt="home"
                  className="w-6 h-6"
                />
                <span className="ml-1">Home</span>
              </a>
            </li>
            <li>
              <a to="/signIn" className="flex items-center text-gray-800">
                <img
                  src="https://img.icons8.com/windows/32/person-male.png"
                  alt="person-male"
                  className="w-6 h-6"
                />
                <span className="ml-1">Sign In</span>
              </a>
            </li>
            <li>
              <a to="/help" className="flex items-center text-gray-800">
                <img
                  src="https://img.icons8.com/fluency-systems-regular/48/web-help.png"
                  alt="web-help"
                  className="w-6 h-6"
                />
                <span className="ml-1">Help</span>
              </a>
            </li>
            <li>
              <a to="/yourCart" className="flex items-center text-gray-800">
                <div className="flex items-center">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/48/shopping-cart--v1.png"
                    alt="shopping-cart--v1"
                    className="w-6 h-6"
                  />
                </div>
                <span className="ml-1">Cart</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none">
            <svg
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          <a to="/yourCart" className="pl-2">
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/shopping-cart--v1.png"
                alt="shopping-cart--v1"
                className="w-6 h-6"
              />
            </div>
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-100 py-2 px-6">
          <ul className="flex flex-col space-y-2">
            <li>
              <a to="/" className="text-gray-600 font-semibold">
                Home
              </a>
            </li>
            <li>
              <a to="/signIn" className="text-gray-600 font-semibold">
                Sign In
              </a>
            </li>
            <li>
              <a to="/help" className="text-gray-600 font-semibold">
                Help
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
