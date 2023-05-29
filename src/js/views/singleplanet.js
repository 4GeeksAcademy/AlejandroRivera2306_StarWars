

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [descripcionp, setDescripcionp] = useState({});
  const [imagen, setImagen] = useState("");
  const [propiedadesp, setPropiedadesp] = useState({});

  const getDescripcionPLanet = () => {
    fetch("https://www.swapi.tech/api/planets/" + params.theid)
      .then((res) => res.json())
      .then((data) => {
        setDescripcionp(data.result);
        fetch(data.result.properties.url)
          .then((res) => res.json())
          .then((datos) => setPropiedadesp(datos.result.properties));
      });
  };

  const getCharacterImage = () => {
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${params.characterId}.jpg`;
    setImagen(imageUrl);
  };

  useEffect(() => {
    getDescripcionPLanet();
    getCharacterImage();
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">{propiedadesp.name}</h1>
     
      <p>{descripcionp.description}</p>
	  <img src={imagen} alt="Character" />
	  
      <p>
        Star Wars, conocida también en español como La guerra de las galaxias, ​​es una franquicia y universo compartido
        de fantasía compuesta primordialmente de una serie de películas concebidas
      </p>

      <hr className="my-4" />
      <div className="caracteristicas">
        <div>
          <h3>Name</h3>
          <p>{propiedadesp.name}</p>
        </div>
        <div>
          <h3>Climate</h3>
          <p>{propiedadesp.climate}</p>
        </div>
        <div>
          <h3>Terrain</h3>
          <p>{propiedadesp.terrain}</p>
        </div>
        <div>
          <h3>Rotation Period</h3>
          <p>{propiedadesp.rotation_period}</p>
        </div>
        <div>
          <h3>Orbital Period</h3>
          <p>{propiedadesp.orbital_period}</p>
        </div>
        <div>
          <h3>Gravity</h3>
          <p>{propiedadesp.gravity}</p>
        </div>
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

SinglePlanet.propTypes = {
  match: PropTypes.object,
};
