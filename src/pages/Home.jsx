import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";

const Home = () => {
  const apps = useLoaderData();
  console.log(apps);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Home;
