import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Resume from "./pages/Resume/Resume.jsx";
import About from "./pages/About/About.jsx";
import Project from "./pages/Projects/Project.jsx";

const router = createBrowserRouter([
  {
    path: "/Portfolio/",
    element: <App />,
    children: [
      {
        path: "/Portfolio/",
        element: <About />,
      },
      {
        path: "/Portfolio/resume",
        element: <Resume />,
      },
      {
        path: "/Portfolio/project",
        element: <Project />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
