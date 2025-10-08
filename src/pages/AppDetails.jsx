import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import { FaStar } from "react-icons/fa";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { formatCompactNumber } from "../utils/formatters";
import ReviewChart from "../components/ReviewChart";
import { installApp, isAppInstalled } from "../utils/localStorage";
import AppErrorPage from "./AppErrorPage";
import AppDetailsCard from "../components/AppDetailsCard";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-gray-500 text-lg font-medium">
            Loading app details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <AppErrorPage message="Something went wrong while fetching app data." />
    );
  }

  const numericId = Number(id);

  if (isNaN(numericId)) {
    return <AppErrorPage />;
  }

  const app = apps.find((a) => a.id === numericId);
  if (!app) {
    return <AppErrorPage />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <AppDetailsCard app={app} />

      <div className="divider my-8"></div>

      {/* Ratings Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center lg:text-left">
          Ratings
        </h2>
        <ReviewChart data={app.ratings} />
      </div>

      <div className="divider my-8"></div>

      {/* Description */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center lg:text-left">
          Description
        </h2>
        <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line text-justify">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
