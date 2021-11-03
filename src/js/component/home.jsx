import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = props => {
	return (
		<div className="text-center mt-5">
			<h1>Simple Counter With React!</h1>
			<h3 className="inicial">{props.mas}</h3>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};
Home.propTypes = {
	mas: PropTypes.number
};
export default Home;
