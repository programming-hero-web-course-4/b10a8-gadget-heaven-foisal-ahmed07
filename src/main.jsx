import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Components/Roots/Roots";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Dashboard from "./Components/DashBoard/Dashboard";
import Gadget from "./Components/Gadget/Gadget";
import Error from "./Components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/gadget.json"),    
      },
      {
        path: "/gadget",
        element: <Gadget></Gadget>,
      },
      {
        path: "/gadget/:category",
        element: <Gadget></Gadget>,
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
