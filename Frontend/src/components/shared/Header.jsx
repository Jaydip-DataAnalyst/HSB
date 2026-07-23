import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import mainlogo from "../../assets/main-icon.png";
import map from "../../assets/pin.gif";

const Header = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();

  
  };

  return (
    <div className="w-full bg-white text-sm">
      {/* Top Navbar */}
      <div className="px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3">
          {/* Left */}
          <div className="flex items-center gap-4">
            <img
              src={mainlogo}
              alt="Logo"
              className="h-8 cursor-pointer object-contain"
              onClick={() => navigate("/")}
            />

            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for Tourist Places"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-[400px] rounded-md border border-gray-300 py-2 pl-4 pr-10 text-sm outline-none focus:border-red-500"
              />

              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <FaSearch className="text-gray-500" />
              </button>
            </form>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={map} alt="Location" className="h-8 w-8" />

              {/* Current Route */}
              <span className="font-medium capitalize">
                {location.path}
              </span>
            </div>

            <button className="rounded bg-[#f84464] px-4 py-2 text-white hover:bg-[#e13757]">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-[#f2f2f2] px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2 text-gray-700">
          <nav className="flex items-center gap-8 font-medium">
            <Link to="/" className="hover:text-red-500">
              Home
            </Link>

            <Link to="/places" className="hover:text-red-500">
              Places
            </Link>
          </nav>

          <div className="flex items-center gap-6 text-sm">
            <span className="cursor-pointer hover:underline"></span>
            <span className="cursor-pointer hover:underline"></span>
            <span className="cursor-pointer hover:underline"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;