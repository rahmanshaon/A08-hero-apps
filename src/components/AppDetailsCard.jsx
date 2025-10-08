import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { formatCompactNumber } from "../utils/formatters";
import { installApp, isAppInstalled } from "../utils/localStorage";

const AppDetailsCard = ({ app }) => {
  const [installed, setInstalled] = useState(false);

  const { id, image, title, companyName, ratingAvg, downloads, size, reviews } =
    app;

  const alreadyInstalled = isAppInstalled(id);

  const handleInstall = () => {
    const success = installApp(app);
    if (success) setInstalled(true);
  };

  return (
    <div className="card lg:card-side flex flex-col lg:flex-row items-center lg:items-start gap-8 p-4 sm:p-6 w-full">
      {/* App Image */}
      <figure className="flex justify-center items-center w-full sm:w-[300px] md:w-[350px] flex-shrink-0">
        <div className="w-full aspect-square max-w-[350px]">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-full object-contain bg-gray-200 p-4"
          />
        </div>
      </figure>

      {/* App Info */}
      <div className="card-body p-2 sm:p-4 md:p-6 text-center lg:text-left w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          {title}
        </h1>
        <p className="mt-2 text-gray-500">
          Developed by{" "}
          <a href="#" className="font-semibold text-purple-600 hover:underline">
            {companyName}
          </a>
        </p>

        <div className="divider my-4"></div>

        {/* Stats + Button */}
        <div className="flex flex-col items-center lg:items-start justify-between gap-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center w-full">
            <div>
              <FiDownload className="mx-auto text-3xl text-green-500" />
              <p className="font-black text-3xl sm:text-4xl mt-1 text-gray-800">
                {formatCompactNumber(downloads)}
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Downloads
              </p>
            </div>

            <div>
              <FaStar className="mx-auto text-3xl text-yellow-400" />
              <p className="font-black text-3xl sm:text-4xl mt-1 text-gray-800">
                {ratingAvg}
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Average Ratings
              </p>
            </div>

            <div>
              <BsFillChatSquareTextFill className="mx-auto text-3xl text-purple-500" />
              <p className="font-black text-3xl sm:text-4xl mt-1 text-gray-800">
                {formatCompactNumber(reviews)}
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Total Reviews
              </p>
            </div>
          </div>

          {/* Install Button */}
          <div className="card-actions w-full flex justify-center lg:justify-start">
            {alreadyInstalled || installed ? (
              <button
                disabled
                className="btn bg-gray-400 border-none text-white text-lg font-bold px-6 h-14 rounded-lg w-full sm:w-auto cursor-not-allowed"
              >
                Installed
              </button>
            ) : (
              <button
                onClick={handleInstall}
                className="btn bg-green-500 hover:bg-green-600 border-none text-white text-lg font-bold px-6 h-14 rounded-lg w-full sm:w-auto"
              >
                Install Now ({size} MB)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsCard;
