import React, { useMemo, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { formatCompactNumber } from "../utils/formatters";
import { loadInstalledApps, uninstallApp } from "../utils/localStorage";
import useApps from "../hooks/useApps";

const Installation = () => {
  const { apps, loading, error } = useApps();
  const [appList, setAppList] = useState(() => loadInstalledApps());
  const [sortOrder, setSortOrder] = useState("none");

  const installedApps = useMemo(() => {
    const installedIds = appList.map((a) => a.id);
    return apps.filter((a) => installedIds.includes(a.id));
  }, [apps, appList]);

  const handleUninstall = (id) => {
    // remove from localstorage
    uninstallApp(id);
    // for ui instant update
    setAppList((prev) => prev.filter((a) => a.id !== id));
  };

  const sortedApps = useMemo(() => {
    if (sortOrder === "size-asc") {
      return [...installedApps].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installedApps].sort((a, b) => b.size - a.size);
    }
    return installedApps;
  }, [installedApps, sortOrder]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-gray-500 text-lg font-medium">
            Loading installed apps...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 text-xl font-semibold min-h-[50vh]">
        Failed to load apps. Please try again later.
      </p>
    );
  }

  // if (!sortedApps.length) {
  //   return (
  //     <p className="flex items-center justify-center text-3xl font-semibold text-red-600 min-h-[50vh]">
  //       No apps installed yet
  //     </p>
  //   );
  // }

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12 space-y-6">
      <div className="flex flex-col gap-5 md:flex-row justify-between py-5 items-center">
        <h3 className="text-2xl font-semibold">
          ({sortedApps.length}) Apps Found
        </h3>

        <label className="w-full max-w-xs">
          <select
            className="select border-gray-800"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="size-asc">Low -&gt; High</option>
            <option value="size-desc">High -&gt; Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        {sortedApps.map((a) => (
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
