import React from "react";
import { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import Pagination from "react-js-pagination";
import Card from "../../component/Card";
import Spinner from "../../component/Spinner";
import "/workspace/StarWars/src/styles/People.scss";
function People() {
	const { store, actions } = useContext(Context);
	const { people } = store;
	const [page, setPage] = useState(1);

	const handleChangePage = pageNumber => {
		setPage(pageNumber);
		actions.loadPeople(`https://www.swapi.tech/api/people/?page=${pageNumber}&limit=9`);
	};

	return (
		<div className="people h-100">
			<div className="row">
				<div className="row mt-2 mx-3">
					<h2 className="h2 text-white">Characters</h2>
					<div className="col-md-9 d-flex align-items-center">
						<p className="text-white">Click on Info to read more about</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-9 d-flex justify-content-center py-4">
						{!!people && people.results.length > 0 ? (
							<Pagination
								activePage={page}
								itemsCountPerPage={9}
								totalItemsCount={people.total_records}
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
					{!!people ? <Card elements={people} route="People" /> : <Spinner />}
				</div>
				<div className="row">
					<div className="col-md-9 d-flex justify-content-center pt-4 pb-3">
						{!!people && people.results.length > 0 ? (
							<Pagination
								activePage={page}
								itemsCountPerPage={9}
								totalItemsCount={people.total_records}
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

export default People;
