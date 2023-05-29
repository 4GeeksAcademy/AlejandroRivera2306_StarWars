
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import { Single } from "./views/single";
import { SinglePlanet } from "./views/singleplanet";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const [favoriteNames, setFavoriteNames] = useState([]);
  const [favoritePlanets, setFavoritePlanets] = useState([]);

  const basename = process.env.BASENAME || "";

  return (
    <div className="contenedormain">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar favoriteNames={favoriteNames} setFavoriteNames={setFavoriteNames} 
          favoritePlanets={favoritePlanets} setFavoritePlanets={setFavoritePlanets} />
          <Routes>
            <Route
              path="/"
              element={<Home setFavoriteNames={setFavoriteNames} 
              setFavoritePlanets={setFavoritePlanets}/>}
            />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/singleplanet/:theid" element={<SinglePlanet />} />
            
          </Routes >
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
