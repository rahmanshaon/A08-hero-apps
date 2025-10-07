import React from "react";
import useApps from "../hooks/useApps";

const AllApps = () => {
  const {apps} = useApps();
  return (
    <div>
      <p>Apps: {apps.length}</p>
    </div>
  );
};

export default AllApps;
