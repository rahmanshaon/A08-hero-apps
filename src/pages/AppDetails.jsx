import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import AppErrorPage from "./AppErrorPage";
import AppDetailsCard from "../components/AppDetailsCard";
import LoadingSpinner from "../components/LoadingSpinner";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  if (loading) {
    return <LoadingSpinner message="Loading app details..." />;
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AppDetailsCard app={app} />
    </div>
  );
};

export default AppDetails;
