import React from "react";
import { Link } from "react-router";
import AppErrorImg from "../assets/App-Error.png";

const AppErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-8">
      <img
        src={AppErrorImg}
        alt="App Not Found"
        className="w-full max-w-xs sm:max-w-sm mb-8 drop-shadow-md"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[#111827] uppercase tracking-wider">
        Oops!! App Not Found
      </h1>

      <p className="text-gray-500 mt-4 text-base md:text-lg max-w-lg">
        The app you're looking for could not be found in our system. Please try
        another one or go back to explore more apps.
      </p>

      <Link
        to="/apps"
        className="btn mt-8 px-10 text-lg text-white border-none font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        style={{
          background: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)",
        }}
      >
        Go Back !
      </Link>
    </div>
  );
};

export default AppErrorPage;
