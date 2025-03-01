import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex justify-between items-center border-b border-[#B22E1F] py-2 px-6 relative">
      <h1 className="text-3xl font-bold text-red-700">A.:Otis.</h1>
      <nav>
        <ul className="flex space-x-6 text-red-700 text-base relative">
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/shop" className="hover:underline">SHOP</Link>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <ul
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-red-500 rounded-lg"
                onMouseEnter={() => setDropdownOpen(true)}   
                onMouseLeave={() => setDropdownOpen(false)} 
              >
                <li className="px-4 py-2 hover:bg-red-100">
                  <Link to="/product/1">Bari Cup</Link>
                </li>
                <li className="px-4 py-2 hover:bg-red-100">
                  <Link to="/product/2">Ceramic Mug</Link>
                </li>
                <li className="px-4 py-2 hover:bg-red-100">
                  <Link to="/product/3">Handmade Cup</Link>
                </li>
                <li className="px-4 py-2 hover:bg-red-100">
                  <Link to="/product/4">Rustic Cup</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Altri link */}
          <li><Link to="/about" className="hover:underline">ABOUT</Link></li>
          <li><Link to="/search" className="hover:underline">SEARCH</Link></li>
          <li><Link to="/login" className="hover:underline">LOGIN</Link></li>
          <li><Link to="/cart" className="hover:underline">CART</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
