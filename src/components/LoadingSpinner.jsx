import React from "react";
import SpinnerImg from "../assets/logo.png";

const LoadingSpinner = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <img src={SpinnerImg} alt="" className="w-20 h-20 animate-spin" />

      {message && (
        <p className="text-gray-800 text-2xl font-semibold mt-4">{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
