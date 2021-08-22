import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Spinner from "../../component/Spinner";
import { Link } from "react-router-dom";

function Vehicle() {
	const param = useParams();
	const { store, actions } = useContext(Context);
	const { vehicles, Favorites } = store;

	useEffect(() => {
		actions.loadVehicles(`https://www.swapi.tech/api/vehicles/${param.id}`);
	}, []);
	const loadPicture = name => {
		return name.toLowerCase().split("-") + ".jpg";
	};
	return (
		<div className="row my-3">
			{!!vehicles &&
			vehicles.data.result.properties.name
				.split(" ")
				.join("")
				.toLowerCase() === param.name ? (
				<div className="card vehicle my-0">
					<div className="row">
						<div className="col-md-6 vehicle-img">
							<div className="row">
								<img
									src={`/img/vehicles/${loadPicture(vehicles.data.result.properties.name)}`}
									className="img-fluid"
									alt={`img of ${vehicles.data.result.properties.name}`}
								/>
							</div>
							<div className="row">
								<div className="d-flex justify-content-around py-3">
									<Link to="/Vehicles" className="btn-link">
										<button type="button" className="btn btn-dark">
											Back to Vehicles
										</button>
									</Link>
									{Favorites.indexOf(character.data.result.properties.name) === -1 ? (
										<button
											className="btn btn-danger"
											onClick={() => {
												actions.addFavorites(vehicles.data.result.properties.name);
											}}>
											Add Favorites
										</button>
									) : (
										<div
											className="btn btn-danger"
											onClick={() => {
												actions.removeFavorites(vehicles.result.properties.name);
											}}>
											Remove Favorites
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h3 className="card-title text-center">{vehicles.data.result.properties.name}</h3>
								<ul className="list-group text-center">
									<li className="list-group-item d-flex">
										Model: {vehicles.result.properties.model}
									</li>
									<li className="list-group-item d-flex">
										Cost: {vehicles.result.properties.cost_in_credits}
									</li>
									<li className="list-group-item d-flex">
										Max Speed: {vehicles.result.properties.max_atmosphering_speed}
									</li>
									<li className="list-group-item d-flex">
										Passengers: {vehicles.result.properties.passengers}
									</li>
									<li className="list-group-item d-flex">Crew: {vehicles.result.properties.crew}</li>
									<li className="list-group-item d-flex">
										Length: {vehicles.result.properties.length}
									</li>
									<li className="list-group-item d-flex">
										Consumables: {vehicles.result.properties.consumables}
									</li>
									<li className="list-group-item d-flex">
										Vehicle Class: {vehicles.result.properties.vehicle_class}
									</li>
									<li className="list-group-item d-flex">
										Manufacturer: {vehicles.result.properties.manufacturer}
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

export default Vehicle;
