import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#1b5d8a] text-white shadow-md sticky top-0 z-50">
      <div className=" bg-[#1b5d8a] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              ⛨MediTrack
            </Link>
          </div>
    
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/appointment" className="hover:text-gray-200">Appointment</Link>
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
            
            
          </div>
          <div className="hidden md:flex">
            <Link to="/login" className="hover:text-gray-200 bg-[#009ac7] px-4 py-2 rounded-md">Login</Link>
            <Link to="/register" className="hover:text-gray-200 px-4 py-2 ">Sign Up</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-blue-600">
          <Link to="/" className="block hover:text-gray-200" onClick={toggleMenu}>Home</Link>
          <Link to="/appointment" className="block hover:text-gray-200" onClick={toggleMenu}>Appointment</Link>
          <Link to="/contact" className="block hover:text-gray-200" onClick={toggleMenu}>Contact</Link>
          <Link to="/login" className="block hover:text-gray-200" onClick={toggleMenu}>Login</Link>
          <Link to="/register" className="block hover:text-gray-200" onClick={toggleMenu}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
