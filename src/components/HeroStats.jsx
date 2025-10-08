import React from "react";

const HeroStats = () => {
  const statsData = [
    {
      label: "Total Downloads",
      value: "29.6M",
      subtitle: "21% More Than Last Month",
    },
    {
      label: "Total Reviews",
      value: "906K",
      subtitle: "46% More Than Last Month",
    },
    {
      label: "Active Apps",
      value: "132+",
      subtitle: "31 More Will Launch",
    },
  ];

  return (
    <div className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Trusted By Millions, Built For You
        </h2>

        {/* Responsive Grid for Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col">
              {/* Stat Label */}
              <p className="text-lg text-purple-200">{stat.label}</p>

              {/* Stat Value */}
              <p className="text-6xl lg:text-7xl font-extrabold my-2 tracking-tight">
                {stat.value}
              </p>

              {/* Stat Subtitle */}
              <p className="text-md text-purple-200">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
