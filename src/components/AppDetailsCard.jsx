import React, { useState } from "react";
import { formatCompactNumber } from "../utils/formatters";
import { installApp, isAppInstalled } from "../utils/localStorage";
import DownloadIcon from "../assets/icon-downloads.png";
import RatingIcon from "../assets/icon-ratings.png";
import ReviewIcon from "../assets/icon-review.png";
import { Link } from "react-router";
import ReviewChart from "./ReviewChart";

const AppDetailsCard = ({ app }) => {
  const [installed, setInstalled] = useState(false);

  const {
    id,
    image,
    title,
    companyName,
    ratingAvg,
    downloads,
    size,
    reviews,
    ratings,
    description,
  } = app;

  const alreadyInstalled = isAppInstalled(id);

  const handleInstall = () => {
    const success = installApp(app);
    if (success) setInstalled(true);
  };

  return (
    <div className="my-20">
      <div className="card lg:card-side flex flex-col lg:flex-row items-center lg:items-start gap-5 p-4 sm:p-6 w-full">
        {/* App Image */}
        <figure className="flex justify-center items-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-full object-contain bg-gray-200 p-4"
          />
        </figure>

        {/* App Info */}
        <div className="card-body p-2 sm:p-4 md:p-6 text-center lg:text-left w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {title}
          </h1>
          <p className="mt-2 text-xl text-gray-500">
            Developed by{" "}
            <Link
              to="/"
              className="font-semibold text-purple-600 hover:underline"
            >
              {companyName}
            </Link>
          </p>

          <div className="divider my-5"></div>

          {/* Stats + Button */}
          <div className="flex flex-col items-center lg:items-start justify-between gap-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 text-center">
              <div className="flex flex-col justify-center items-center gap-2">
                <img src={DownloadIcon} alt="" className="w-10 h-10" />
                <p className=" text-gray-500 font-medium mt-1">Downloads</p>
                <p className="font-black text-3xl sm:text-4xl mt-1 text-gray-800">
                  {formatCompactNumber(downloads)}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <img src={RatingIcon} alt="" className="w-10 h-10" />
                <p className=" text-gray-500 font-medium mt-1">
                  Average Ratings
                </p>
                <p className="font-black text-3xl sm:text-4xl mt-1 text-gray-800">
                  {ratingAvg}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <img src={ReviewIcon} alt="" className="w-10 h-10" />
                <p className="text-gray-500 font-medium mt-1">Total Reviews</p>
                <p className="font-black text-3xl sm:text-4xl mt-1 text-gray-800">
                  {formatCompactNumber(reviews)}
                </p>
              </div>
            </div>

            {/* Install Button */}
            <div className="card-actions w-full flex justify-center lg:justify-start">
              {alreadyInstalled || installed ? (
                <button
                  disabled
                  className="btn bg-gray-400 border-none text-gray-500 text-lg font-bold px-6 h-14 rounded-lg w-full sm:w-auto cursor-not-allowed"
                >
                  Installed
                </button>
              ) : (
                <button
                  onClick={handleInstall}
                  className="btn bg-[linear-gradient(90deg,#00827A_9.6%,#54CF68_92.23%)] hover:bg-[linear-gradient(90deg,#54CF68_9.6%,#00827A_92.23%)] transition-all duration-500 ease-in-out border-none text-white text-lg font-bold px-6 h-14 rounded-lg w-full sm:w-auto"
                >
                  Install Now ({size} MB)
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="divider my-10"></div>

      {/* Ratings Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center lg:text-left">
          Ratings
        </h2>
        <ReviewChart data={ratings} />
      </div>

      <div className="divider my-10"></div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center lg:text-left">
          Description
        </h2>
        <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetailsCard;
