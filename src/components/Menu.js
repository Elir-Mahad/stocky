import React from "react";
import { Link } from "react-router-dom";

function Menu() {
	return (
		<nav className="menu">
			<Link to="/stocky">
				<a>First page</a>
			</Link>

			<Link to="/semiconductors">
				<a>Second page</a>
			</Link>
		</nav>
	);
}

export default Menu;
