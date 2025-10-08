import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

const MainLayout = () => {
const location = useLocation();
  const [navigating, setNavigating] = React.useState(false);

  useEffect(() => {
    setNavigating(true);
    const t = setTimeout(() => setNavigating(false), 500);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {navigating ? <LoadingSpinner /> : <Outlet />}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
