const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: null,
			person: null,
			vehicles: null,
			vehicle: null,
			planets: null,
			planet: null,
			species: null,
			race: null,
			starships: null,
			starship: null,
			favorites: []
		},
		actions: {
			loadPeople: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) {
						throw new Error({ message: "Error fetching People." });
					}
					const data = await response.json();
					setStore({
						people: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			loadVehicles: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) {
						throw new Error({ message: "Error fetching Vehicles." });
					}
					const data = await response.json();
					setStore({
						vehicles: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			loadPlanets: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) {
						throw new Error({ message: "Error fetching Planets." });
					}
					const data = await response.json();
					setStore({
						planets: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			loadSpecies: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) {
						throw new Error({ message: "Error fetching Species." });
					}
					const data = await response.json();
					setStore({
						species: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			loadStarships: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) {
						throw new Error({ message: "Error fetching Starships." });
					}
					const data = await response.json();
					setStore({
						starships: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			loadPerson: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error("Error fetching Planet");
					const data = await response.json();
					setStore({
						person: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			loadPlanet: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error("Error fetching Planet");
					const data = await response.json();
					setStore({
						planet: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			loadRace: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error("Error fetching Planet");
					const data = await response.json();
					setStore({
						race: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			loadStarship: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error("Error fetching Planet");
					const data = await response.json();
					setStore({
						starship: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			loadVehicle: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error("Error fetching Planet");
					const data = await response.json();
					setStore({
						vehicle: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			loadFavorites: async url => {
				try {
					const response = await fetch(url, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.status !== 200) throw new Error("Error API");
					const data = await response.json();
					setStore({ favorites: data });
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			addFavorites: element => {
				let { favorites } = getStore();
				favorites.push(element);
				setStore({ favorites });
			},
			removeFavorites: element => {
				let { favorites } = getStore();
				let list = favorites.filter(item => item !== element);
				setStore({ favorites: list });
			}
		}
	};
};

export default getState;
