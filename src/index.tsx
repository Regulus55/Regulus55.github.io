import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>
);
