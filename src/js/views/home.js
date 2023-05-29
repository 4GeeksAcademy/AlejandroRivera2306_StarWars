

import React, { useEffect, useState } from "react";
import Cartas from "../component/cartas";
import "../../styles/home.css";
import CartasPlanetas from "../component/cartasplanets";

const Home = ({ setFavoriteNames , setFavoritePlanets }) => {
  const [personajes, setPersonajes] = useState([]);
  const [planetas , setPlanetas] = useState([]);
  const obtenerPersonajes = () => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  };


  const obtenerPlanetas = () => {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((data) => setPlanetas(data.results));
  };


  const handleFavoriteClick = (name) => {
    setFavoriteNames((prevNames) => [...prevNames, name]);
  };

  const handleFavoriteClickPlanets = (namep) => {
    setFavoritePlanets((prevPlanets) => [...prevPlanets, namep]);
  };

  useEffect(() => {
    obtenerPersonajes();
    obtenerPlanetas();
  }, []);

  return (
    <div>
      <h1>Personajes</h1>
      <div className="cartascontenedor">
        {personajes.map((personaje, index) => (
          <Cartas
            key={index + 1}
            personaje={personaje}
            gender={personaje.gender}
            uid={index + 1}
            hair={personaje.hair_color}
            name={personaje.name}
            eyes={personaje.eye_color}
            handleFavoriteClick={handleFavoriteClick}
          />
        ))}
      </div>
      <h1>Planetas</h1>
      <div className="cartascontenedor">
        {planetas.map((planeta, index) => (
          <CartasPlanetas
          key={index + 1}
          personaje={planeta}
          nameplanet={planeta.name}
          polulation={planeta.population}
          uidplanet={index + 1}
          terrain={planeta.terrain}
          handleFavoriteClick={handleFavoriteClickPlanets}
        />
        ))}
      </div>
    </div>
  );
};

export default Home;
