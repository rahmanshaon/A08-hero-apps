import React, { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { formatCompactNumber } from "../utils/formatters";

const Installation = () => {
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("appList"));
    if (savedList) setAppList(savedList);
  }, []);

  if (!appList.length)
    return (
      <p className="flex items-center justify-center text-3xl font-semibold text-red-600 min-h-[50vh]">
        No data Available
      </p>
    );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 md:flex-row justify-between py-5 items-center">
        <h3 className="text-2xl font-semibold">
          ({appList.length}) Apps Found
        </h3>

        <button>Sort</button>
      </div>

      <div className="space-y-3">
        {appList.map((a) => (
          <div
            key={a.id}
            className="card card-side bg-base-100 shadow-md p-4 flex-col sm:flex-row items-center space-y-4 sm:space-y-0"
          >
            {/* App Icon */}
            <figure className="flex-shrink-0 w-24 h-24">
              <img src={a.image} alt="" className="rounded-lg bg-gray-200" />
            </figure>

            {/* App Details */}
            <div className="card-body p-0 sm:px-6 flex-grow text-center sm:text-left">
              <h2 className="card-title text-lg font-bold">{a.title}</h2>
              {/* Stats */}
              <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-gray-500 mt-2">
                <span className="flex items-center gap-1.5">
                  <FiDownload className="text-green-500" />{" "}
                  {formatCompactNumber(a.downloads)}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaStar className="text-orange-400" /> {a.ratingAvg}
                </span>
                <span>{a.size} MB</span>
              </div>
            </div>

            {/* Uninstall Button */}
            <div className="card-actions">
              <button className="btn bg-[#20c997] hover:bg-[#1baa80] text-white border-none">
                <FaTrash className="mr-2" />
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
