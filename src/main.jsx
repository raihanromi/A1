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
    path: "/portfolio_react/",
    element: <App />,
    children: [
      {
        path: "/portfolio_react/",
        element: <About />,
      },
      {
        path: "/portfolio_react/resume",
        element: <Resume />,
      },
      {
        path: "/portfolio_react/project",
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
