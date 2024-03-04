import React from "react";

// Footer component for footer section

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4  bottom-0 w-full">
      <div className="container mx-auto flex justify-center items-center">
        <span className="flex items-center">
          <p className="mr-2">Created with</p>
          <img
            className="w-6 h-6 mr-2"
            src="https://img.icons8.com/ios-glyphs/30/hand-drawn-heart.png"
            alt="hand-drawn-heart"
          />
          <p>by Vedang Nikure</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
