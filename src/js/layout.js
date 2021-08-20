import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "/workspace/react-hello-webapp/src/styles/layout.scss";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Films from "./views/Films";
import Vehicles from "./views/Vehicles";
import People from "./views/People";
import Starships from "./views/Starships";
import Species from "./views/Species";
import Planets from "./views/Planets";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/People">
						<People />
					</Route>
					<Route exact path="/Vehicles">
						<Vehicles />
					</Route>
					<Route exact path="/Films">
						<Films />
					</Route>
					<Route exact path="/Starships">
						<Starships />
					</Route>
					<Route exact path="/Species">
						<Species />
					</Route>
					<Route exact path="/Planets">
						<Planets />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
