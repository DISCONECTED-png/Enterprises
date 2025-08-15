import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logof from "../assets/logof.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // Optional: Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-[10000]">
      <div className="navbar-start">
        {/* Mobile Hamburger */}
        <div className="relative lg:hidden" ref={dropdownRef}>
          <button
            onClick={handleMenuToggle}
            className="btn btn-ghost flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          <div
            className={`absolute mt-2 w-64 bg-white shadow-lg rounded-lg z-50 transition-all duration-300 origin-top transform ${
              isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
            }`}
          >
            <ul className="menu p-3 space-y-2">
              <li>
                <Link to="/" onClick={handleCloseMenu} className="hover:text-blue-600 font-bold underline-hover">
                  Home
                </Link>
              </li>
              <li>
                <span className="hover:text-blue-600 font-bold">Products</span>
                <ul className="pl-4 mt-1 space-y-1">
                  <li><Link to="/centrifugal" onClick={handleCloseMenu}>Centrifugal Blowers</Link></li>
                  <li><Link to="/tubeaxialfans" onClick={handleCloseMenu}>Axial Fans</Link></li>
                  <li><Link to="/inducedandforceddraft" onClick={handleCloseMenu}>Induced and Forced Draft Fans</Link></li>
                  <li><Link to="/furnace" onClick={handleCloseMenu}>Furnace Blowers</Link></li>
                  <li><Link to="/dustcollection" onClick={handleCloseMenu}>Dust Collector</Link></li>
                  <li><Link to="/Shredding" onClick={handleCloseMenu}>Shredding Machines</Link></li>
                  <li><Link to="/heatpumping" onClick={handleCloseMenu}>Heat Pumping Unit</Link></li>
                  <li><Link to="/oiloutflow" onClick={handleCloseMenu}>Oil Outflow Heater</Link></li>
                  <li><Link to="/impeller" onClick={handleCloseMenu}>Impeller</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/#aboutus" onClick={handleCloseMenu} className="hover:text-blue-600 font-bold underline-hover">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <Link to="/" className="logo-container ml-2">
          <span className="logo-letters">
            <span className="s-letter">S</span>
            <span className="j-letter">E</span>
          </span>
          <span className="logo-name font-bold">SURAJ ENTERPRISES</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6 items-center">
          <li><Link to="/" className="hover:text-blue-600 font-bold underline-hover">Home</Link></li>
          <li className="relative group">
            <span className="text-gray-700 hover:text-blue-600 font-bold cursor-pointer underline-hover">
              Products
            </span>
            <ul className="absolute left-0 top-full bg-white shadow-lg rounded-lg hidden group-hover:flex flex-col p-3 w-78 z-20">
              <li><Link to="/centrifugal" className="hover:text-blue-600 font-bold underline-hover">Centrifugal Blowers</Link></li>
              <li><Link to="/tubeaxialfans" className="hover:text-blue-600 font-bold underline-hover">Axial Fans</Link></li>
              <li><Link to="/inducedandforceddraft" className="hover:text-blue-600 font-bold underline-hover">Induced and Forced Draft Fans</Link></li>
              <li><Link to="/furnace" className="hover:text-blue-600 font-bold underline-hover">Furnace Blowers</Link></li>
              <li><Link to="/dustcollection" className="hover:text-blue-600 font-bold underline-hover">Dust Collector</Link></li>
              <li><Link to="/Shredding" className="hover:text-blue-600 font-bold underline-hover">Shredding Machines</Link></li>
              <li><Link to="/heatpumping" className="hover:text-blue-600 font-bold underline-hover">Heat Pumping Unit</Link></li>
              <li><Link to="/oiloutflow" className="hover:text-blue-600 font-bold underline-hover">Oil Outflow Heater</Link></li>
              <li><Link to="/impeller" className="hover:text-blue-600 font-bold underline-hover">Impeller</Link></li>
            </ul>
          </li>
          <li><Link to="/#aboutus" className="hover:text-blue-600 font-bold underline-hover">About Us</Link></li>
        </ul>
      </div>

      {/* Contact Button */}
      <div className="navbar-end">
        <Link
          to="/#contact"
          className="btn bg-blue-600 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
