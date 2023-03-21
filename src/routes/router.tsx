import { createBrowserRouter } from "react-router-dom";

import Home from "../features/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
