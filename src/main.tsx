import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import "./index.css";
import { UserPage } from "@/pages/User/user";
import { UsersPage } from "@/pages/Users/user";
import { ChartsPage } from "@/pages/Charts/charts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/users/:id",
        element: <UserPage />,
      },
      {
        path: "/analytics",
        element: <ChartsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);
