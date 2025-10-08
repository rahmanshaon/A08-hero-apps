import React, { useEffect, useState } from "react";
import { Link, useRouteError } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErrorImg404 from "../assets/error-404.png";
import LoadingSpinner from "../components/LoadingSpinner";

const ErrorPage = () => {
  const error = useRouteError();
  const message = error?.statusText || error?.message;
  const status = error?.status;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="py-20">
        {loading ? (
          <LoadingSpinner />
        ) : status === 404 ? (
          <div className="flex flex-col items-center text-center px-8">
            <img src={ErrorImg404} alt="" className="w-full max-w-md mb-8" />

            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
              Oops, page not found!
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              The page you are looking for is not available.
            </p>

            <Link
              to="/"
              className="btn mt-8 px-10 text-white text-lg border-none"
              style={{
                background:
                  "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)",
              }}
            >
              Go Back!
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center px-4">
            <h1 className="text-7xl font-extrabold text-gray-800 mb-4">
              {status || "Error"}
            </h1>
            <p className="text-2xl font-semibold text-red-600 mb-2">
              {message}
            </p>
            <p className="text-gray-500 mt-2">
              Something went wrong. Please try again later.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
