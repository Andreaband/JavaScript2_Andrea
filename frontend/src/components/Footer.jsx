import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* LOGO */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-white">A.:Otis.</h2>
          <p className="text-sm text-gray-400">Handcrafted Ceramic Mugs</p>
        </div>

        {/* NAVIGAZIONE */}
        <nav className="flex flex-col md:flex-row md:space-x-6 mb-4 md:mb-0">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/shop" className="hover:text-white transition">Shop</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* SOCIAL MEDIA */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaFacebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} A.:Otis. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
