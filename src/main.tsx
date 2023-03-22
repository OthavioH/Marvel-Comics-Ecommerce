import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./features/Nav/Nav";
import Router from "./routes/router";
import { GlobalFonts } from "./shared/styles/fonts";
import { GlobalStyles } from "./shared/styles/global.styles";
import { MainContainer } from "./shared/styles/styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyles />
    <BrowserRouter>
      <MainContainer>
        <Nav />
        <Router />
      </MainContainer>
    </BrowserRouter>
  </React.StrictMode>
);
