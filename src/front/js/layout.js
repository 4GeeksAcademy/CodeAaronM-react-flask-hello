import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home.jsx";
import {FarmerView} from "./pages/farmerView.jsx"
import {FarmerServices} from "./pages/farmerServices.jsx"
import { AddFarm } from "./pages/addFarm.jsx"
import injectContext from "./store/appContext";
import RegFarmer from "./pages/regFarm.jsx";
import RegTech from "./pages/regTech.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            {/* Falta la ruta de login y registro */}
            <Route element={<FarmerView/>} path="/profile" />
            <Route element={<FarmerServices/>} path="/profileServices" />
            <Route element={<AddFarm/>} path="/addFarm" />
            <Route element={<RegFarmer />} path="/registerFarmer" />
            <Route element={<RegTech />} path="/registerTech" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
