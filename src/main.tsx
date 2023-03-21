import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { GlobalFonts } from "./shared/styles/fonts";
import { GlobalStyles } from "./shared/styles/global.styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
