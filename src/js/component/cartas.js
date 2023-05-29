// import React ,{ useState  }  from "react";
// import { Link } from "react-router-dom";
// import rigoImage from "../../img/rigo-baby.jpg";



// const Cartas = ( props) => {


//   return (
//     <div className="carta">
//     <div className="card" style={{ width: '100%' }}>
//       <img src={rigoImage} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h2 className="card-title">{props.name}</h2>
//           <div className="propiedades">
//           <p>Gender: {props.gender}</p> 
//           <p>Hear Color: {props.hear}</p>
//           <p>Color Eyes: {props.eyes}</p>
//           </div>
//         <div className="botonescarta">
//           <Link to={"/single/"+ props.uid} className="btn btn-primary">Learn More!</Link>
//           <button type="button" className="btn btn-outline-warning"><i className="fa fa-heart text-danger"
//            onClick={() => props.handleFavoriteClick(props.name)}/></button>
//         </div>

//       </div>
//     </div>
//     </div>
//   );
// }

// export default Cartas;
import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

const Cartas = (props) => {
  return (
    <div className="carta">
      <div className="card" style={{ width: "100%" }}>
        <img src={rigoImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <div className="propiedades">
            <p>Gender: {props.gender}</p>
            <p>Hair Color: {props.hair}</p>
            <p>Eye Color: {props.eyes}</p>
          </div>
          <div className="botonescarta">
            <Link to={"/single/" + props.uid} className="btn btn-primary">
              Learn More!
            </Link>
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={() => props.handleFavoriteClick(props.name)}
            >
              <i className="fa fa-heart text-danger" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartas;
