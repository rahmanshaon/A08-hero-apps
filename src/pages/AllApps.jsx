import React, { useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";
import { FaSearch } from "react-icons/fa";

const AllApps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  // console.log(search);

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((a) => a.title.toLowerCase().includes(term))
    : apps;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg text-gray-500 animate-pulse">Loading apps...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg text-red-500">
          Failed to load apps. Try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div className="text-center my-8">
        <h2 className="text-[#001931] text-4xl font-bold mb-4">
          Our All Applications
        </h2>
        <p className="text-gray-500 text-lg">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col gap-5 md:flex-row justify-between py-5 items-center">
        <h3 className="text-2xl font-semibold">
          ({searchedApps.length}) Apps Found
        </h3>

        <label className="input w-[400px] rounded-lg">
          <span className="label">
            <FaSearch />
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div>
        {searchedApps.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[50vh] text-center">
            <p className="text-2xl font-semibold text-gray-600 mb-2">
              No apps found!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {searchedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
