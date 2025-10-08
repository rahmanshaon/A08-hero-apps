import React from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router";
import HeroImg from "../assets/hero.png";

const HeroBanner = () => {
  return (
    <div className="container mx-auto px-4 pt-20 md:pt-32">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-[#001931]">We Build</span>
          <br />
          <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-[linear-gradient(125deg,#9F62F2_5.68%,#632EE3_88.38%)] bg-clip-text text-transparent transition-colors duration-400 ease-in-out px-2">
            Productive
          </span>
          <span className="text-[#001931]">Apps</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* App Store Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Google Play Store Button */}
          <Link
            to="https://play.google.com"
            target="_blank"
            className="flex items-center justify-center gap-3 w-48 px-4 py-3 border border-gray-600 rounded-lg"
          >
            <IoLogoGooglePlaystore className="w-7 h-7" />
            <span className="text-lg font-medium">Google Play</span>
          </Link>

          {/* Apple App Store Button */}
          <Link
            to="https://www.apple.com/app-store/"
            target="_blank"
            className="flex items-center justify-center gap-3 w-48 px-4 py-3 border border-gray-600 rounded-lg"
          >
            <FaApple className="w-7 h-7" />
            <span className="text-lg font-medium">App Store</span>
          </Link>
        </div>
        <div className="pt-14 flex justify-center items-center">
            <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
