import React from "react";

function home() {
	return (
		<div className="home h-100">
			<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="/workspace/StarWars/public/img/obi-wan-kenobi.jpg"
							alt="First slide"
						/>
					</div>
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="/workspace/StarWars/public/img/anakin-skywalker.jpg"
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="/workspace/StarWars/public/img/luke-skywalker.jpg"
							alt="Third slide"
						/>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default home;
