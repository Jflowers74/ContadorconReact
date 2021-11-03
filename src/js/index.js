//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
//import contador from "./component/contador.jsx";
//render your react application

let contador = 0;
setInterval(() => {
	ReactDOM.render(<Home mas={contador} />, document.querySelector("#app"));
	//document.querySelector("incial").textContent = contador;
	contador++;
}, 1000);
