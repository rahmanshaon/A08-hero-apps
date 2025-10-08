import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import NavLinkLists from "./NavLinkLists";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <nav className="navbar container mx-auto px-4">
        {/* Left Side: Logo */}
        <div className="navbar-start">
          {/* Dropdown Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiMenuAlt1 className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              <NavLinkLists />
            </ul>
          </div>

          {/* Logo and Site Name */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img src={logo} alt="HERO.IO Logo" className="w-8 h-8" />
            <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-[linear-gradient(125deg,#9F62F2_5.68%,#632EE3_88.38%)] bg-clip-text text-transparent font-bold transition-all duration-500">
              HERO.IO
            </span>
          </Link>
        </div>

        {/* Center: Large Screen Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <NavLinkLists variant="gradient" />
          </ul>
        </div>

        {/* Right Side: Contribute Button */}
        <div className="navbar-end">
          <Link
            to="https://github.com/rahmanshaon"
            target="_blank"
            className="btn text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-[linear-gradient(125deg,#9F62F2_5.68%,#632EE3_88.38%)] transition ease-in-out"
          >
            <FaGithub className="w-5 h-5" />
            Contribute
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
