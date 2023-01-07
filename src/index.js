import React from "react";
import ReactDOM from "react-dom/client";
import App, { loader as rootLoader, action as rootAction } from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Contact, { loader as contactLoader } from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
