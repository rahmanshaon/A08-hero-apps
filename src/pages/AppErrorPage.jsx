import React from "react";
import { Link } from "react-router";

const AppErrorPage = ({ message = "App not found." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[30vh] text-center p-6">
      <h1 className="text-6xl font-extrabold text-purple-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 font-semibold mb-6">{message}</p>
      <Link
        to="/apps"
        className="btn bg-purple-600 hover:bg-purple-700 border-none text-white font-bold px-6 py-3 rounded-lg"
      >
        Back to All Apps
      </Link>
    </div>
  );
};

export default AppErrorPage;
