import React, { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { formatCompactNumber } from "../utils/formatters";
import { toast } from "react-toastify";

const Installation = () => {
  const [appList, setAppList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("appList"));
    if (savedList) setAppList(savedList);
    setLoading(false);
  }, []);

  const handleUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("appList"));
    let updatedList = existingList.filter((a) => a.id !== id);
    setAppList(updatedList);
    localStorage.setItem("appList", JSON.stringify(updatedList));
    toast.success("App uninstalled successfully");
  };

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...appList].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...appList].sort((a, b) => b.size - a.size);
    } else {
      return appList;
    }
  })();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-lg font-semibold text-gray-500 animate-pulse">
          Loading installed apps...
        </p>
      </div>
    );
  }

  if (!appList.length)
    return (
      <p className="flex items-center justify-center text-3xl font-semibold text-red-600 min-h-[50vh]">
        No apps installed yet
      </p>
    );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 md:flex-row justify-between py-5 items-center">
        <h3 className="text-2xl font-semibold">
          ({appList.length}) Apps Found
        </h3>

        <label className="w-full max-w-xs">
          <select
            className="select border-gray-800"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="size-asc">Low -&gt; High</option>
            <option value="size-desc">High -&gt; low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        {sortedItem.map((a) => (
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
              <button
                onClick={() => handleUninstall(a.id)}
                className="btn bg-[#20c997] hover:bg-[#1baa80] text-white border-none"
              >
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
