import React from "react"; //this line imports react, it is necessary because without it jsx won't work

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "./App.css"                         // this imports the style.css file so that all the styles can work, without it the styles won't work

import Menu from "./components/Menu.js";

import Recommendations from "./components/recommendations.js";

import Genstocks from "./components/nav.js";

import TechNews from "./components/technews.js";

import CryptoNews from "./components/cryptonews.js";

import GeneralNews from "./components/generalnews.js";

import Semiconductors from "./components/semconductor_sn.js";

function App() {
	return (
		<Router>
			<div className="allpages">
				<Switch>
					<Route path="/stocky">
						<Menu />
						<div className="firstpage">
							<div className="recommendations">
								<div>
									{" "}
									<Recommendations />{" "}
								</div>
							</div>

							<div className="mainbox">
								<div className="gstocks">
									{" "}
									<Genstocks />{" "}
								</div>

								<div className="techcrypto">
									<div className="gnews">
										{" "}
										<GeneralNews />{" "}
									</div>

									<div className="tnews">
										{" "}
										<TechNews />{" "}
									</div>

									<div className="cnews">
										{" "}
										<CryptoNews />{" "}
									</div>
								</div>
							</div>
						</div>
					</Route>
					<Route path="/semiconductors">
						<Menu />
						<div className="secondpage">
							<div className="sectorpage">
								<Semiconductors />
							</div>
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

{
	/* <div className="secondpage">

<div className="sectorpage">
<Semiconductors />
</div>

</div> */
}
