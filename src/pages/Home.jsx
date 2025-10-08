import React from "react";
import { Link } from "react-router";
import AppCard from "../components/AppCard";
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
