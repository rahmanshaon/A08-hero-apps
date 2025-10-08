import React, { useEffect, useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";
import { FaSearch } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";

const AllApps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (!apps.length) return;

    setSearchLoading(true);

    const delayDebounce = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const results = term
        ? apps.filter((a) => a.title.toLowerCase().includes(term))
        : apps;
      setFilteredApps(results);
      setSearchLoading(false);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search, apps]);

  if (loading) {
    return <LoadingSpinner message="Loading all apps..." />;
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
    <div className="container mx-auto p-4 md:p-8 my-20">
      <div className="text-center mb-10">
        <h2 className="text-[#001931] text-4xl md:text-5xl font-bold mb-4">
          Our All Applications
        </h2>
        <p className="text-gray-500 text-lg">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col gap-5 md:flex-row justify-between py-5 items-center">
        <h3 className="text-xl md:text-2xl font-semibold">
          ({filteredApps.length}) Apps Found
        </h3>

        <label className="input md:w-[400px] rounded-lg flex items-center gap-3 border px-3 py-2 shadow-sm">
          <FaSearch className="text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="w-full outline-none"
          />
        </label>
      </div>

      <div>
        {searchLoading ? (
          <div className="py-20">
            <LoadingSpinner message="Searching apps..." />
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[50vh] text-center">
            <p className="text-3xl font-semibold text-gray-800 mb-2">
              No apps found!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
