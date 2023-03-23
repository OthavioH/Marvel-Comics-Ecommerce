import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./MainContainer";
import { GlobalFonts } from "./shared/styles/fonts";
import { GlobalStyles } from "./shared/styles/global.styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyles />
    <BrowserRouter>
      <MainContainer />
    </BrowserRouter>
  </React.StrictMode>
);
