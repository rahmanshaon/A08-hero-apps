import React from "react";
import HeroBanner from "../components/HeroBanner";
import HeroStats from "../components/HeroStats";
import TrendingApps from "../components/TrendingApps";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <HeroStats />
      <TrendingApps />
    </div>
  );
};

export default Home;
