import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // lightweight icons
import PrimaryButton from './Button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black fixed w-full z-50 top-0 shadow-lg text-white">
      <div className="px-6 md:px-12 sm:px-2 sm:max-w-10xl lg:px-20">
        <div className="flex justify-between items-center sm:items-justfy-between sm:justfy-between h-16">
          {/* Logo */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Olumide O.
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-green-400">HOME</Link>
            <Link to="/about" className="hover:text-green-400">ABOUT</Link>
            <Link to="/service" className="hover:text-green-400">SERVICES</Link>
            <Link to="/project" className="hover:text-green-400">PROJECTS</Link>
            {/* <Link to="/contact" className="hover:text-green-400">CONTACT</Link> */}
            <PrimaryButton to="/contact">CONNECT ME</PrimaryButton>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none text-white"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-black transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-green-400">HOME</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-green-400">ABOUT</Link>
          <Link to="/service" onClick={() => setMenuOpen(false)} className="hover:text-green-400">SERVICES</Link>
          <Link to="/project" onClick={() => setMenuOpen(false)} className="hover:text-green-400">PROJECTS</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-green-400">CONTACT</Link>
          <PrimaryButton to="/contact">CONNECT ME</PrimaryButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
