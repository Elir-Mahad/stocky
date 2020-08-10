import React from "react";
import { Link } from "react-router-dom";

import logonoword from "../assets/logonoword.png";

function Menu() {
	return (
		<nav className="menu">
			<Link to="/stocky">
				<img className="logo_small" src={logonoword} />
			</Link>

			<div className="group">
				<Link to="/stocky/biotech">
					<a>Bio Tech</a>
				</Link>

				<Link to="/stocky/dataprocessing">
					<a>Data processing</a>
				</Link>
			</div>

			<div className="group">
				<Link to="/stocky/semiconductors">
					<a>Semiconductors</a>
				</Link>

				<Link to="/stocky/preciousmetals">
					<a>Precious Metals</a>
				</Link>
			</div>

			<div className="group">
				<Link to="/stocky/steel">
					<a>Steel</a>
				</Link>

				<Link to="/stocky/metalfabrication">
					<a>Metal Fabrication</a>
				</Link>
			</div>
		</nav>
	);
}

export default Menu;
