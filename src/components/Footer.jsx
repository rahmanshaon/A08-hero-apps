import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import NavLinkLists from "./NavLinkLists";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Footer Details section */}
        <div className="flex flex-col justify-center items-center space-y-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold mt-4"
          >
            <img
              src={logo}
              alt="HERO.IO Logo"
              className="w-9 h-9 md:w-12 md:h-12"
            />
            <span className="text-white text-2xl md:text-3xl">HERO.IO</span>
          </Link>

          <ul className="menu menu-horizontal px-1 space-x-6">
            <NavLinkLists variant="white" />
          </ul>

          {/* Social Links */}
          <div className="flex flex-col items-center my-4">
            <h3 className="font-semibold text-white text-lg mb-4">
              Social Links
            </h3>
            <div className="flex space-x-4">
              <Link
                to="https://www.linkedin.com/in/rahmanshaon"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                to="https://github.com/rahmanshaon"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                to="https://x.com/RahmanShaon1"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.facebook.com/rahmanshaon11"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} - All right reserved by
            HERO.IO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
