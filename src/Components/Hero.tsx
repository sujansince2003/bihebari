import {
  Search,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  ShieldCheck,
  LayoutGrid,
  ChevronRight,
  Menu, // Import Menu icon for mobile
  X, // Import X icon for closing mobile menu
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState hook

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.postimg.cc/pdH3XhJ3/image.png')",
      }}
    >
      {/* Navbar */}
      <nav className="relative z-20 flex justify-between items-center px-4 md:px-8 py-4 md:py-6 gap-4">
        {/* Logo */}
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

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-4 md:px-8">
        {/* Left Text Section */}
        <div className="flex flex-col gap-3 pt-16 md:pt-24 max-w-lg md:max-w-3xl">
          <h2 className="font-dancingScript text-2xl md:text-4xl font-semibold text-white">
            Love you are looking for
          </h2>
          <p className="font-dancingScript text-5xl md:text-8xl font-semibold text-white leading-tight">
            Find Your Forever
          </p>
          <p className="font-dancingScript text-5xl md:text-8xl font-semibold text-white">
            Is it
          </p>

          <div className="flex flex-col sm:flex-row gap-4 py-6">
            <button className="bg-white rounded-xl gap-2 flex items-center justify-center py-3 px-6 text-sm md:text-base">
              Find partner
              <ChevronRight />
            </button>
            <button className="bg-transparent border border-white text-white rounded-xl py-3 px-6 text-sm md:text-base">
              Sign UP
            </button>
          </div>
        </div>

        {/* Right Vertical Social Icons */}
        <div className="flex lg:flex-col items-center gap-4 mt-8 lg:mt-0">
          <div className="w-[2px] h-20 lg:h-40 bg-[#B4B4B4]"></div>
          {[Facebook, Linkedin, Instagram, Twitter].map((Icon, idx) => (
            <button
              key={idx}
              className="bg-white rounded-full p-2 flex items-center justify-center"
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Right Features */}
      <div className="flex justify-center lg:justify-end mt-10">
        <div className="flex flex-col sm:flex-row gap-6 backdrop-blur-lg p-6 sm:p-10 rounded-tl-2xl max-w-4xl w-full">
          {[
            {
              icon: <ShieldCheck size={32} color="white" />,
              title: "Simple & Largest",
              desc: "Increases your chances of meeting the right person.",
            },
            {
              icon: <LayoutGrid size={32} color="white" />,
              title: "Fast and verified",
              desc: "100% fast, secured, verified mobile numbers.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col gap-3 justify-center items-center text-center"
            >
              <div className="bg-red-600 rounded-full p-2 inline-block">
                {item.icon}
              </div>
              <p className="font-semibold text-lg sm:text-xl text-white">
                {item.title}
              </p>
              <p className="text-sm md:w-[300px] sm:text-md text-[#D9D9D9]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
