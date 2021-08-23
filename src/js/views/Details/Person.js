import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Spinner from "../../component/Spinner";
import { Link } from "react-router-dom";

function Person() {
	const param = useParams();
	const { store, actions } = useContext(Context);
	const { person, favorites } = store;

	useEffect(() => {
		actions.loadPerson(`https://www.swapi.tech/api/people/${param.id}`);
	}, []);
	const loadPicture = name => {
		return name.toLowerCase().split("-") + ".jpg";
	};
	return (
		<div className="row my-3">
			{!!person &&
			person.data.result.properties.name
				.split(" ")
				.join("")
				.toLowerCase() === param.name ? (
				<div className="card person my-0">
					<div className="row">
						<div className="col-md-6 person-img">
							<div className="row">
								<img
									src={`/img/${loadPicture(person.data.result.properties.name)}`}
									className="img-fluid"
								/>
							</div>
							<div className="row">
								<div className="d-flex justify-content-around py-3">
									<Link to="/People" className="btn-link">
										<button type="button" className="btn btn-dark">
											Back to People
										</button>
									</Link>
									{favorites.indexOf(person.data.result.properties.name) === -1 ? (
										<button
											className="btn btn-danger"
											onClick={() => {
												actions.addFavorites(person.data.result.properties.name);
											}}>
											Add Favorites
										</button>
									) : (
										<div
											className="btn btn-danger"
											onClick={() => {
												actions.removeFavorites(person.result.properties.name);
											}}>
											Remove Favorites
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h3 className="card-title text-center">{person.data.result.properties.name}</h3>
								<ul className="list-group text-center">
									<li className="list-group-item d-flex">
										Birth Day: <span>{person.result.properties.birth_year}</span>
									</li>
									<li className="list-group-item d-flex">
										Gender: <span>{person.result.properties.gender}</span>
									</li>
									<li className="list-group-item d-flex">
										Eyes Color: <span>{person.result.properties.eye_color}</span>
									</li>
									<li className="list-group-item d-flex">
										Height: <span>{person.result.properties.height}</span>
									</li>
									<li className="list-group-item d-flex">
										Mass: <span>{person.result.properties.mass}</span>
									</li>
									<li className="list-group-item d-flex">
										HomeWorld: <span>{person.result.properties.homeworld}</span>
									</li>
									<li className="list-group-item d-flex">
										Race: <span>{person.result.properties.species}</span>
									</li>
									<li className="list-group-item d-flex">
										Vehicles: <span>{person.result.properties.vehicles}</span>
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
