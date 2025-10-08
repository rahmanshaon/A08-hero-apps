import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { formatCompactNumber } from "../utils/formatters";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  //   console.log(app);
  const { id, image, title, ratingAvg, downloads } = app;
  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100 shadow-sm p-4">
        <figure className="overflow-hidden">
          <img
            src={image}
            alt="Shoes"
            className="rounded-lg w-full h-full object-cover bg-gray-200 p-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center font-semibold xl:text-lg lg:text-base">
            {title}
          </h2>
        </div>

        <div className="flex justify-between items-center">
          {/* Downloads Badge */}
          <div className="flex items-center gap-2 bg-gray-100 text-green-600 px-3 py-1 rounded-md text-sm">
            <FiDownload />
            <span className="font-semibold">
              {formatCompactNumber(downloads)}
            </span>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-1.5 bg-yellow-100 text-yellow-600 px-3 py-1 rounded-md text-sm">
            <FaStar />
            <span className="font-semibold">{ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
