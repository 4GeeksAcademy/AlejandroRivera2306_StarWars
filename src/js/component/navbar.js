// import React from "react";
// import { Link } from "react-router-dom";
// import starWars from "../../img/starwars.png";

// export const Navbar = (props) => {

  
// 	return (
// 		<nav className="navbar navbar-expand-lg navbar-light bg-light">
//   		<div className="container-fluid">
//     <a className="navbar-brand" href="#"><img  className ="imagenlogo" src={starWars}></img></a>
	
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
	 
//     </button>
// 	<div className="btn-group" role="group">
//     <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//       Favoritos
//     </button>
//     <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
//       <li><a className="dropdown-item" href="#">Dropdown link</a></li>
//       <li><a className="dropdown-item" href="#">Dropdown link</a></li>
//     </ul>
//   </div>
    
//   </div>
// </nav>
// 	);
// };
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import starWars from "../../img/starwars.png";

// export const Navbar = (props) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
//   const handleFavoriteRemove = (index) => {
//     const newFavoriteNames = props.favoriteNames.filter((name, i) => i !== index);
//     props.setFavoriteNames(newFavoriteNames);
//   };
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <img
//             className="imagenlogo"
//             src={starWars}
//             alt="Star Wars"
//           />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="btn-group" role="group">
//           <button
//             id="btnGroupDrop1"
//             type="button"
//             className="btn btn-primary dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-expanded={isDropdownOpen ? "true" : "false"}
//             onClick={toggleDropdown}
//           >
//             Favoritos
//           </button>
//           <ul className={`dropdown-menu${isDropdownOpen ? " show" : ""}`} aria-labelledby="btnGroupDrop1">
//   {(props.favoriteNames.length > 0 || props.favoritePlanets.length > 0) ? (
//     [...props.favoriteNames, ...props.favoritePlanets].map((name, index) => (
//       <li key={index}>
//         <a className="dropdown-item" href="#">
//           <button className="btn btn-link" onClick={() => handleFavoriteRemove(index)}>
//             <i className="fa fa-times" aria-hidden="true"></i>
//           </button>
//           {name}
//         </a>
//       </li>
//     ))
//   ) : (
//     <li>
//       <span className="dropdown-item">Lista vacía</span>
//     </li>
//   )}
// </ul>


//         </div>
//       </div>
//     </nav>
//   );
// };

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import starWars from "../../img/starwars.png";

// export const Navbar = (props) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleFavoriteRemove = (index) => {
//     const newFavoriteNames = props.favoriteNames.filter((name, i) => i !== index);
//     props.setFavoriteNames(newFavoriteNames);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <img className="imagenlogo" src={starWars} alt="Star Wars" />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="btn-group" role="group">
//           <button
//             id="btnGroupDrop1"
//             type="button"
//             className="btn btn-primary dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-expanded={isDropdownOpen ? "true" : "false"}
//             onClick={toggleDropdown}
//           >
//             Favoritos
//           </button>
//           <ul className={`dropdown-menu${isDropdownOpen ? " show" : ""}`} aria-labelledby="btnGroupDrop1">
//             {props.favoriteNames.length > 0 || props.favoritePlanets.length > 0 ? (
//               [...props.favoriteNames, ...props.favoritePlanets].map((name, index) => (
//                 <li key={index}>
//                   <a className="dropdown-item" href="#">
//                     <button className="btn btn-link" onClick={() => handleFavoriteRemove(index)}>
//                       <i className="fa fa-times" aria-hidden="true"></i>
//                     </button>
//                     {name}
//                   </a>
//                 </li>
//               ))
//             ) : (
//               <li>
//                 <span className="dropdown-item">Lista vacía</span>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import starWars from "../../img/starwars.png";

// export const Navbar = (props) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleFavoriteRemove = (index) => {
//     if (index < props.favoriteNames.length) {
//       const newFavoriteNames = props.favoriteNames.filter((name, i) => i !== index);
//       props.setFavoriteNames(newFavoriteNames);
//     } else {
//       const newFavoritePlanets = props.favoritePlanets.filter((planet, i) => i !== index - props.favoriteNames.length);
//       props.setFavoritePlanets(newFavoritePlanets);
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <img className="imagenlogo" src={starWars} alt="Star Wars" />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="btn-group" role="group">
//           <button
//             id="btnGroupDrop1"
//             type="button"
//             className="btn btn-primary dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-expanded={isDropdownOpen ? "true" : "false"}
//             onClick={toggleDropdown}
//           >
//             Favoritos
//           </button>
//           <ul className={`dropdown-menu${isDropdownOpen ? " show" : ""}`} aria-labelledby="btnGroupDrop1">
//             {props.favoriteNames.length > 0 || props.favoritePlanets.length > 0 ? (
//               [...props.favoriteNames, ...props.favoritePlanets].map((name, index) => (
//                 <li key={index}>
//                   <a className="dropdown-item" href="#">
//                     <button className="btn btn-link" onClick={() => handleFavoriteRemove(index)}>
//                       <i className="fa fa-times" aria-hidden="true"></i>
//                     </button>
//                     {name}
//                   </a>
//                 </li>
//               ))
//             ) : (
//               <li>
//                 <span className="dropdown-item">Lista vacía</span>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
import React, { useState } from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/starwars.png";

export const Navbar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFavoriteRemove = (index, event) => {
    event.stopPropagation();
    if (index < props.favoriteNames.length) {
      const newFavoriteNames = props.favoriteNames.filter((name, i) => i !== index);
      props.setFavoriteNames(newFavoriteNames);
    } else {
      const newFavoritePlanets = props.favoritePlanets.filter((planet, i) => i !== index - props.favoriteNames.length);
      props.setFavoritePlanets(newFavoritePlanets);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="imagenlogo" src={starWars} alt="Star Wars" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={toggleDropdown}
          >
            Favoritos
          </button>
          <ul className={`dropdown-menu${isDropdownOpen ? " show" : ""}`} aria-labelledby="btnGroupDrop1">
            {props.favoriteNames.length > 0 || props.favoritePlanets.length > 0 ? (
              [...props.favoriteNames, ...props.favoritePlanets].map((name, index) => (
                <li key={index}>
                  <a className="dropdown-item" href="#">
                    <button className="btn btn-link" onClick={(event) => handleFavoriteRemove(index, event)}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    {name}
                  </a>
                </li>
              ))
            ) : (
              <li>
                <span className="dropdown-item">Lista vacía</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
