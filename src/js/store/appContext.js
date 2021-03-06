import React, { useState, useEffect, createContext } from "react";
import getState from "./flux.js";

export const Context = createContext(null);

export default function injectContext(PassedComponent) {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updateStore =>
					setState({
						store: Object.assign(state.store, updateStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.loadPeople("https://www.swapi.tech/api/people?page=1&limit=9", {});
			state.actions.loadVehicles("https://www.swapi.tech/api/vehicles?page=1&limit=9", {});
			state.actions.loadSpecies("https://www.swapi.tech/api/species?page=1&limit=9", {});
			state.actions.loadStarships("https://www.swapi.tech/api/starships?page=1&limit=9", {});
			state.actions.loadPlanets("https://www.swapi.tech/api/planets?page=1&limit=9", {});
		}, []);
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
}
