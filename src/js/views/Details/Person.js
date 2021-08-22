import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Spinner from "../../component/Spinner";
import { Link } from "react-router-dom";

function Person() {
	const param = useParams();
	const { store, actions } = useContext(Context);
	const { people, Favorites } = store;

	useEffect(() => {
		actions.loadPeople(`https://www.swapi.tech/api/people/${param.id}`);
	}, []);
	const loadPicture = name => {
		return name.toLowerCase().split("-") + ".jpg";
	};
	return (
		<div className="row my-3">
			{!!people &&
			people.data.result.properties.name
				.split(" ")
				.join("")
				.toLowerCase() === param.name ? (
				<div className="card people my-0">
					<div className="row">
						<div className="col-md-6 people-img">
							<div className="row">
								<img
									src={`/img/people/${loadPicture(people.data.result.properties.name)}`}
									className="img-fluid"
									alt={`img of ${people.data.result.properties.name}`}
								/>
							</div>
							<div className="row">
								<div className="d-flex justify-content-around py-3">
									<Link to="/People" className="btn-link">
										<button type="button" className="btn btn-dark">
											Back to People
										</button>
									</Link>
									{Favorites.indexOf(character.data.result.properties.name) === -1 ? (
										<button
											className="btn btn-danger"
											onClick={() => {
												actions.addFavorites(people.data.result.properties.name);
											}}>
											Add Favorites
										</button>
									) : (
										<div
											className="btn btn-danger"
											onClick={() => {
												actions.removeFavorites(people.result.properties.name);
											}}>
											Remove Favorites
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h3 className="card-title text-center">{people.data.result.properties.name}</h3>
								<ul className="list-group text-center">
									<li className="list-group-item d-flex">
										Birth Day: {people.result.properties.birth_year}
									</li>
									<li className="list-group-item d-flex">
										Gender: {people.result.properties.gender}
									</li>
									<li className="list-group-item d-flex">
										Eyes Color: {people.result.properties.eye_color}
									</li>
									<li className="list-group-item d-flex">
										Height: {people.result.properties.height}
									</li>
									<li className="list-group-item d-flex">Mass: {people.result.properties.mass}</li>
									<li className="list-group-item d-flex">
										HomeWorld: {people.result.properties.homeworld}
									</li>
									<li className="list-group-item d-flex">Race: {people.result.properties.species}</li>
									<li className="list-group-item d-flex">
										Vehicles: {people.result.properties.vehicles}
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

export default Person;
