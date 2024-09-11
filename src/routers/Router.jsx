import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import College from "../pages/College";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "colleges",
        element: <College />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
