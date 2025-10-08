import React from "react";
import { formatCompactNumber } from "../utils/formatters";
import { Link } from "react-router";
import DownloadIcon from "../assets/icon-downloads.png";
import RatingIcon from "../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  //   console.log(app);
  const { id, image, title, ratingAvg, downloads } = app;
  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100 shadow-sm hover:shadow-xl transition ease-in-out p-4">
        <figure className="overflow-hidden">
          <img
            src={image}
            alt="Shoes"
            className="rounded-lg w-full h-full object-cover bg-gray-200 p-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center font-semibold xl:text-lg">
            {title}
          </h2>
        </div>

        <div className="flex justify-between items-center">
          {/* Downloads Badge */}
          <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-md text-sm">
            <img src={DownloadIcon} alt="" className="w-4 h-4" />
            <span className="font-semibold">
              {formatCompactNumber(downloads)}
            </span>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-1.5 bg-orange-100 text-orange-400 px-3 py-1 rounded-md text-sm">
            <img src={RatingIcon} alt="" className="w-4 h-4" />
            <span className="font-semibold">{ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
