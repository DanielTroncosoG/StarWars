import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-ldark mb-3 aling-items-center">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/People">
					<button className="btn btn-secondary">Characters</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/Planets">
					<button className="btn btn-secondary">Planets</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/Species">
					<button className="btn btn-secondary">Species</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/Starships">
					<button className="btn btn-secondary">Starships</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/Vehicles">
					<button className="btn btn-secondary">Vehicles</button>
				</Link>
			</div>
		</nav>
	);
};
