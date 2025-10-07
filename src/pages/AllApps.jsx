import React from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";
import { FaSearch } from "react-icons/fa";

const AllApps = () => {
  const { apps } = useApps();
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
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-2xl font-semibold">({apps.length}) Apps Found</h1>

        <label className="input">
          <span className="label">
            <FaSearch />
          </span>
          <input type="search" placeholder="Search Apps" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
