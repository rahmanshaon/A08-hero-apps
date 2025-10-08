import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import { FaStar } from "react-icons/fa";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { formatCompactNumber } from "../utils/formatters";
import AppDetailsErrorPage from "./AppDetailsErrorPage";
import ReviewChart from "../components/ReviewChart";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const { apps, loading, error } = useApps();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-lg font-semibold text-gray-500">
          Loading app details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <AppDetailsErrorPage message="Something went wrong while fetching app data." />
    );
  }

  const numericId = Number(id);

  if (isNaN(numericId)) {
    return <AppDetailsErrorPage message="Invalid app ID." />;
  }

  const app = apps.find((a) => a.id === numericId);
  if (!app) {
    return <AppDetailsErrorPage message="App not found." />;
  }

  const {
    image,
    title,
    companyName,
    ratingAvg,
    downloads,
    size,
    reviews,
    description,
    ratings,
  } = app || {};

  const handleAddToInstallList = () => {
    const existingList = JSON.parse(localStorage.getItem("appList"));
    // console.log(existingList);
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate) {
        toast.warning("This app is already installed!");
        return;
      }
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("appList", JSON.stringify(updatedList));
    toast.success("App installed successfully");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="card lg:card-side flex flex-col lg:flex-row items-center lg:items-start gap-8 p-4 sm:p-6 w-full">
        <figure className="flex justify-center items-center w-full sm:w-[300px] md:w-[350px] flex-shrink-0">
          <div className="w-full aspect-square max-w-[350px]">
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full h-full object-contain bg-gray-200 p-4"
            />
          </div>
        </figure>

        {/* App Details */}
        <div className="card-body p-2 sm:p-4 md:p-6 text-center lg:text-left w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {title}
          </h1>
          <p className="mt-2 text-gray-500">
            Developed by{" "}
            <a
              href="#"
              className="font-semibold text-purple-600 hover:underline"
            >
              {companyName}
            </a>
          </p>

          {/* Divider */}
          <div className="divider my-4"></div>

          {/* Stats Grid & Install Button */}
          <div className="flex flex-col items-center lg:items-start justify-between gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center w-full">
              {/* Downloads */}
              <div>
                <FiDownload className="mx-auto text-3xl text-green-500" />
                <p className="font-black text-3xl sm:text-4xl mt-1 text-gray-800">
                  {formatCompactNumber(downloads)}
                </p>
                <p className="text-sm text-gray-500 font-medium mt-1">
                  Downloads
                </p>
              </div>
              {/* Average Ratings */}
              <div>
                <FaStar className="mx-auto text-3xl text-yellow-400" />
                <p className="font-black text-3xl sm:text-4xl mt-1 text-gray-800">
                  {ratingAvg}
                </p>
                <p className="text-sm text-gray-500 font-medium mt-1">
                  Average Ratings
                </p>
              </div>
              {/* Total Reviews */}
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
              <button
                onClick={handleAddToInstallList}
                className="btn bg-green-500 hover:bg-green-600 border-none text-white text-lg font-bold px-6 h-14 rounded-lg w-full sm:w-auto"
              >
                Install Now ({size} MB)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider my-8"></div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center lg:text-left">
          Ratings
        </h2>
        <div>
          <ReviewChart data={ratings} />
        </div>
      </div>

      {/* Divider */}
      <div className="divider my-8"></div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center lg:text-left">
          Description
        </h2>
        <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
