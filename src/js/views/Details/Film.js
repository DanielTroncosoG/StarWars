import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Spinner from "../../component/Spinner";
import { Link } from "react-router-dom";

function Film() {
	const param = useParams();
	const { store, actions } = useContext(Context);
	const { films, Favorites } = store;

	useEffect(() => {
		actions.loadFilms(`https://www.swapi.tech/api/films/${param.id}`);
	}, []);
	const loadPicture = name => {
		return name.toLowerCase().split("-") + ".jpg";
	};
	return (
		<div className="row my-3">
			{!!films &&
			films.data.result.properties.title
				.split(" ")
				.join("")
				.toLowerCase() === param.name ? (
				<div className="card film my-0">
					<div className="row">
						<div className="col-md-6 film-img">
							<div className="row">
								<img
									src={`/img/films/${loadPicture(films.data.result.properties.title)}`}
									className="img-fluid"
									alt={`img of ${films.data.result.properties.name}`}
								/>
							</div>
							<div className="row">
								<div className="d-flex justify-content-around py-3">
									<Link to="/Films" className="btn-link">
										<button type="button" className="btn btn-dark">
											Back to Films
										</button>
									</Link>
									{Favorites.indexOf(character.data.result.properties.title) === -1 ? (
										<button
											className="btn btn-danger"
											onClick={() => {
												actions.addFavorites(films.data.result.properties.title);
											}}>
											Add Favorites
										</button>
									) : (
										<div
											className="btn btn-danger"
											onClick={() => {
												actions.removeFavorites(films.result.properties.title);
											}}>
											Remove Favorites
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h3 className="card-title text-center">{films.data.result.properties.title}</h3>
								<ul className="list-group text-center">
									<li className="list-group-item d-flex">
										Release Date: {films.result.properties.release_date}
									</li>
									<li className="list-group-item d-flex">
										Episode: {films.result.properties.episode_id}
									</li>
									<li className="list-group-item d-flex">
										Director: {films.result.properties.director}
									</li>
									<li className="list-group-item d-flex">
										Producer: {films.result.properties.producer}
									</li>
									<li className="list-group-item d-flex">
										Characters: {films.result.properties.characters}
									</li>
									<li className="list-group-item d-flex">
										Preview: {films.result.properties.opening_crawl}
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

export default Film;
