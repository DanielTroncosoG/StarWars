<div className="people h-100">
			<div className="row">
				<div className="row mt-2">
					<h2 className="h2 text-white">Characters</h2>
						<div className="col-md-12 d-flex align-items-center">
							<p className="text-white">Click on Info to read more about</p>
						</div>
				</div>
				<div className="row">
					<div className="col-md-12 d-flex justify-content-center py-4">
						{
							!!people && 
							people.results.length > 0 ? (
								<Pagination activePage={page} itemsCountPerPage={9} totalItemsCount={people.total_records} onChange={handleChangePage} itemClass="page-item" linkClass="link-item" />
							) : ("")
						}
					</div>
				</div>
				<div className="row bg-custom rounded-3 py-1">
                {
                    !!people ?
                        <Card elements={people} route="people" />
                        :
                        <Spinner />
                }
            	</div>
				<div className="row">
                <div className="col-md-12 d-flex justify-content-center pt-4 pb-3">
                    {
                        !!people &&
                            people.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={9}
                                totalItemsCount={people.total_records}
                                onChange={handleChangePage}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        ) : ("")
                    }
                </div>
            </div>
			</div>

		</div>

function Planets() {
	const [store, actions] = useContext(Context);
	const { people } = store;
	const [page, setPage] = useState(1);

	const handleChangePage = pageNumber => {
		setPage(pageNumber);
		actions.loadPlanets(`https://www.swapi.tech/api/people/?page=${pageNumber}&limit=9`);
	};
	return (
		<div className="people h-100">
			<div className="row">
				<div className="row mt-2">
					<h2 className="h2 text-white">Characters</h2>
						<div className="col-md-12 d-flex align-items-center">
							<p className="text-white">Click on Info to read more about</p>
						</div>
				</div>
				<div className="row">
					<div className="col-md-12 d-flex justify-content-center py-4">
						{
							!!people && 
							people.results.length > 0 ? (
								<Pagination activePage={page} itemsCountPerPage={9} totalItemsCount={people.total_records} onChange={handleChangePage} itemClass="page-item" linkClass="link-item" />
							) : ("")
						}
					</div>
				</div>
				<div className="row bg-custom rounded-3 py-1">
                {
                    !!people ?
                        <Card elements={people} route="people" />
                        :
                        <Spinner />
                }
            	</div>
				<div className="row">
                <div className="col-md-12 d-flex justify-content-center pt-4 pb-3">
                    {
                        !!people &&
                            people.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={9}
                                totalItemsCount={people.total_records}
                                onChange={handleChangePage}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        ) : ("")
                    }
                </div>
            </div>
			</div>

		</div>
	);
}

export default Planets;
