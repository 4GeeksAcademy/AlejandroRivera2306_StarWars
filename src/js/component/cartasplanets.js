import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

const CartasPlanetas = (props) => {
  return (
    <div className="carta">
      <div className="card" style={{ width: "100%" }}>
        <img src={rigoImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{props.nameplanet}</h2>
          <div className="propiedades">
            <p>Terrain: {props.terrain}</p>
            <p>Population: {props.population}</p>
          </div>
          <div className="botonescarta">
            <Link to={"/singleplanet/" + props.uidplanet} className="btn btn-primary">
              Learn More!
            </Link>
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={() => props.handleFavoriteClick(props.nameplanet)}
            >
              <i className="fa fa-heart text-danger" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartasPlanetas;
