import {
  Search,
  Menu, // Import Menu icon for mobile
  X, // Import X icon for closing mobile menu
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="relative bg-black z-20 flex justify-between items-center px-4 md:px-8 py-4 md:py-6 gap-4">
      <div className=" gap-20 hidden md:flex">
        <div className="text-white text-2xl font-bold">
          <img src="/src/assets/logo.png" alt="Logo" className="h-16 w-20" />
        </div>
        <ul className="flex flex-row gap-8 text-white font-medium text-base items-center">
          <Link to="/" className="hover:underline cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="hover:underline cursor-pointer">
            About us
          </Link>
          <li className="hover:underline cursor-pointer">Our Services</li>
          <Link to="/blogs" className="hover:underline cursor-pointer">
            Blog
          </Link>
          <li className="hover:underline cursor-pointer">Membership Plans</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <div className="hidden md:flex flex-row items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-xl p-2">
            <Search size={20} />
          </div>
          <button className="bg-white rounded-xl py-2 px-4 text-base">
            Login
          </button>
        </div>
      </div>
      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden w-full flex justify-between items-center ">
        <img src="/src/assets/logo.png" alt="Logo" className="h-10" />

        <div className="flex gap-2">
          <div className="bg-white rounded-xl p-2">
            <Search size={20} />
          </div>
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 md:hidden z-10 animate-fade-in-down">
          <ul className="flex flex-col gap-4 text-white font-medium text-lg items-center">
            <Link
              to="/"
              className="hover:underline cursor-pointer py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:underline cursor-pointer py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>
            <li
              className="hover:underline cursor-pointer py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Services
            </li>
            <Link
              to="/blogs"
              className="hover:underline cursor-pointer py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <li
              className="hover:underline cursor-pointer py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Membership Plans
            </li>
            <li
              className="hover:underline cursor-pointer py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </li>
          </ul>
          <button
            className="bg-white rounded-xl py-2 px-6 text-base mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
