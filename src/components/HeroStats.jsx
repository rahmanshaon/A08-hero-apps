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
      <div className="container mx-auto px-5 py-20 text-center">
        <h2 className="text-4xl font-bold">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col">
              {/* Stat Label */}
              <p className="text-purple-200">{stat.label}</p>

              {/* Stat Value */}
              <p className="text-5xl lg:text-6xl font-extrabold my-4">
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
