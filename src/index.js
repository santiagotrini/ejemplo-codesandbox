import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import About from "./About";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
