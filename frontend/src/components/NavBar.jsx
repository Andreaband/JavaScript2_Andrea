import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false); // State for checkout
  const [searchQuery, setSearchQuery] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchOpen(false);
    navigate(`/shop?search=${searchQuery}`);
  };

  return (
    <header className="flex justify-between items-center border-b border-[#B22E1F] py-2 px-6 relative">
      <h1 className="text-3xl font-bold text-red-700">A.:Otis.</h1>
      <nav>
        <ul className="flex space-x-6 text-red-700 text-base relative">
          {/* SHOP with dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/shop" className="hover:underline">SHOP</Link>
            {isDropdownOpen && (
              <ul
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-red-500 rounded-lg"
                onMouseEnter={() => setDropdownOpen(true)}   
                onMouseLeave={() => setDropdownOpen(false)} 
              >
                <li className="px-4 py-2 hover:bg-red-100"><Link to="/product/1">Bari Cup</Link></li>
                <li className="px-4 py-2 hover:bg-red-100"><Link to="/product/2">Ceramic Mug</Link></li>
                <li className="px-4 py-2 hover:bg-red-100"><Link to="/product/3">Handmade Cup</Link></li>
                <li className="px-4 py-2 hover:bg-red-100"><Link to="/product/4">Rustic Cup</Link></li>
                <li className="px-4 py-2 hover:bg-red-100"><Link to="/product/5">Napoli Cup</Link></li>
                <li className="px-4 py-2 hover:bg-red-100"><Link to="/product/6">Milano Cup</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/about" className="hover:underline">ABOUT</Link></li>
          
          {/* SEARCH with dropdown */}
          <li className="relative">
            <button className="hover:underline" onClick={() => setSearchOpen(!isSearchOpen)}>
              SEARCH
            </button>
            {isSearchOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg border border-red-500 rounded-lg p-2">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Search products..."
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition"
                  >
                    Search
                  </button>
                </form>
              </div>
            )}
          </li>

          {/* LOGIN with dropdown */}
          <li className="relative">
            <button className="hover:underline" onClick={() => setLoginOpen(!isLoginOpen)}>
              LOGIN
            </button>
            {isLoginOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg border border-red-500 rounded-lg p-4">
                <h3 className="text-red-700 text-lg font-semibold mb-2">Login</h3>
                <input
                  type="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                <button className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition">
                  Sign In
                </button>
              </div>
            )}
          </li>

          {/* CART with dummy checkout */}
          <li className="relative">
            <button className="hover:underline" onClick={() => setCheckoutOpen(true)}>
              CART
            </button>
            {isCheckoutOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg border border-red-500 rounded-lg p-4">
                <h3 className="text-red-700 text-lg font-semibold mb-2">Checkout</h3>
                <p className="text-gray-600 mb-4">No products in the cart</p>
                <button
                  className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition"
                  onClick={() => setCheckoutOpen(false)}
                >
                  Close
                </button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
