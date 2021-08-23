import React from "react";
import { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import Pagination from "react-js-pagination";
import Card from "../../component/Card";
import Spinner from "../../component/Spinner";
import "/workspace/StarWars/src/styles/Vehicles.scss";

function Vehicles() {
	const { store, actions } = useContext(Context);
	const { vehicles } = store;
	const { page, setPage } = useState(1);

	const handleChangePage = pageNumber => {
		setPage(pageNumber);
		actions.loadSpecies(`https://www.swapi.tech/api/vehicles/?page=${pageNumber}&limit=9`);
	};
	return (
		<div className="vehicles h-100">
			<div className="row">
				<div className="row mt-2">
					<h2 className="h2 text-white">Vehicles</h2>
					<div className="col-md-12 d-flex align-items-center">
						<p className="text-white">Click on Info to read more about</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 d-flex justify-content-center py-4">
						{!!vehicles && vehicles.results.length > 0 ? (
							<Pagination
								activePage={page}
								itemsCountPerPage={9}
								totalItemsCount={vehicles.total_records}
								onChange={handleChangePage}
								itemClass="page-item"
								linkClass="link-item"
							/>
						) : (
							""
						)}
					</div>
				</div>
				<div className="row bg-custom rounded-3 py-1 px-3 m-3">
					{!!vehicles ? <Card elements={vehicles} route="Species" /> : <Spinner />}
				</div>
				<div className="row">
					<div className="col-md-12 d-flex justify-content-center pt-4 pb-3">
						{!!vehicles && vehicles.results.length > 0 ? (
							<Pagination
								activePage={page}
								itemsCountPerPage={9}
								totalItemsCount={vehicles.total_records}
								onChange={handleChangePage}
								itemClass="page-item"
								linkClass="page-link"
							/>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Vehicles;
