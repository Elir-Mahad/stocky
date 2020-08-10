import React from "react";
import { Link } from "react-router-dom";

import logonoword from "../assets/logonoword.png";

function Menu() {
	return (
		<nav className="menu">
			<Link to="/stocky">
				<img className="logo_small" src={logonoword} />
			</Link>

			<div className="menugroup">
				<Link to="/stocky/biotech">
					<a>Bio Tech</a>
				</Link>

				<Link to="/stocky/dataprocessing">
					<a>Data processing</a>
				</Link>
			</div>

			<div className="menugroup">
				<Link to="/stocky/semiconductors">
					<a>Semiconductors</a>
				</Link>

				<Link to="/stocky/preciousmetals">
					<a>Precious Metals</a>
				</Link>
			</div>

			<div className="menugroup">
				<Link to="/stocky/steel">
					<a>Steel</a>
				</Link>

				<Link to="/stocky/metalfabrication">
					<a>Metal Fabrication</a>
				</Link>
			</div>

			<ul class="phone">
				<li>
					<a>
						Menu<span>▼</span>
					</a>
					<ul class="sub-menu">
						<Link to="/stocky/metalfabrication">
							<a>Metal Fabrication</a>
						</Link>
						<Link to="/stocky/metalfabrication">
							<a>Metal Fabrication</a>
						</Link>
						<Link to="/stocky/metalfabrication">
							<a>Metal Fabrication</a>
						</Link>
						<Link to="/stocky/metalfabrication">
							<a>Metal Fabrication</a>
						</Link>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
