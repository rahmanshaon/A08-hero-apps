import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import Installation from "../pages/Installation";
import AppDetails from "../pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <AllApps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: '/app/:id',
        element: <AppDetails />,
      }
    ],
  },
]);

export default router;
