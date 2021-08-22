import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Spinner from "../../component/Spinner";
import { Link } from "react-router-dom";

function Race() {
	const param = useParams();
	const { store, actions } = useContext(Context);
	const { species, Favorites } = store;

	useEffect(() => {
		actions.loadSpecies(`https://www.swapi.tech/api/species${param.id}`);
	}, []);
	const loadPicture = name => {
		return name.toLowerCase().split("-") + ".jpg";
	};
	return (
		<div className="row my-3">
			{!!species &&
			species.data.result.properties.name
				.split(" ")
				.join("")
				.toLowerCase() === param.name ? (
				<div className="card race my-0">
					<div className="row">
						<div className="col-md-6 race-img">
							<div className="row">
								<img
									src={`/img/species/${loadPicture(species.data.result.properties.name)}`}
									className="img-fluid"
									alt={`img of ${species.data.result.properties.name}`}
								/>
							</div>
							<div className="row">
								<div className="d-flex justify-content-around py-3">
									<Link to="/Species" className="btn-link">
										<button type="button" className="btn btn-dark">
											Back to Species
										</button>
									</Link>
									{Favorites.indexOf(character.data.result.properties.name) === -1 ? (
										<button
											className="btn btn-danger"
											onClick={() => {
												actions.addFavorites(species.data.result.properties.name);
											}}>
											Add Favorites
										</button>
									) : (
										<div
											className="btn btn-danger"
											onClick={() => {
												actions.removeFavorites(species.result.properties.name);
											}}>
											Remove Favorites
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h3 className="card-title text-center">{species.data.result.properties.name}</h3>
								<ul className="list-group text-center">
									<li className="list-group-item d-flex">
										Homeworld: {species.result.properties.homeworld}
									</li>
									<li className="list-group-item d-flex">
										Language: {species.result.properties.language}
									</li>
									<li className="list-group-item d-flex">
										Average Height: {species.result.properties.average_height}
									</li>
									<li className="list-group-item d-flex">
										Average Lifespan: {species.result.properties.average_lifespan}
									</li>
									<li className="list-group-item d-flex">
										Classification: {species.result.properties.classification}
									</li>
									<li className="list-group-item d-flex">
										Designation: {species.result.properties.designation}
									</li>
									<li className="list-group-item d-flex">
										Eyes Color: {species.result.properties.eye_colors}
									</li>
									<li className="list-group-item d-flex">
										Hair Color: {species.result.properties.hair_colors}
									</li>
									<li className="list-group-item d-flex">
										Vehicle Class: {species.result.properties.vehicle_class}
									</li>
									<li className="list-group-item d-flex">
										Skin Colors: {species.result.properties.skin_colors}
									</li>
									<li className="list-group-item d-flex">
										People: {species.result.properties.people}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
}

export default Race;
