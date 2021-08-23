import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/layout.scss";

import home from "./views/Principal/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Films from "./views/Principal/Films";
import Vehicles from "./views/Principal/Vehicles";
import People from "./views//Principal/People";
import Starships from "./views/Principal/Starships";
import Species from "./views/Principal/Species";
import Planets from "./views/Principal/Planets";
import Favorites from "./views/Principal/FavoritesPage";
import Person from "./views/Details/Person";
import Planet from "./views/Details/Planet";
import Film from "./views/Details/Film";
import Race from "./views/Details/Race";
import Vehicle from "./views/Details/Vehicle";
import Starship from "./views/Details/Starship";
import Error from "./component/Error";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={home} />
					<Route exact path="/People" component={People} />
					<Route exact path="/Planets" component={Planets} />
					<Route exact path="/Starships" component={Starships} />
					<Route exact path="/Films" component={Films} />
					<Route exact path="/Species" component={Species} />
					<Route exact path="/Vehicles" component={Vehicles} />
					<Route exact path="/People/:name/:id" component={Person} />
					<Route exact path="/Planets/:name/:id" component={Planet} />
					<Route exact path="/Starships/:name/:id" component={Starship} />
					<Route exact path="/Films/:name/:id" component={Film} />
					<Route exact path="/Species/:name/:id" component={Race} />
					<Route exact path="/Vehicles/:name/:id" component={Vehicle} />
					<Route exact path="/Favorites" component={Favorites} />
					<Route component={Error} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
