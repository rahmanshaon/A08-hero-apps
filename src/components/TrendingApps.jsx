import React from "react";
import useApps from "../hooks/useApps";
import { Link } from "react-router";
import AppCard from "./AppCard";
import LoadingSpinner from "./LoadingSpinner";

const TrendingApps = () => {
  const { apps, loading, error } = useApps();
  const featuredApps = apps.slice(0, 8);

  // Loading state
  if (loading) {
    return <LoadingSpinner message="Loading trending apps..." />;
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg text-red-500">
          Failed to load apps. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-20 p-4 md:p-8">
      <div className="text-center mb-10">
        <h2 className="text-[#001931] text-4xl md:text-5xl font-bold mb-4">
          Trending Apps
        </h2>
        <p className="text-gray-500 text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {featuredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 mb-20">
        <Link
          to="/apps"
          className="btn text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-[linear-gradient(125deg,#9F62F2_5.68%,#632EE3_88.38%)] transition ease-in-out"
        >
          Show All Apps
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
