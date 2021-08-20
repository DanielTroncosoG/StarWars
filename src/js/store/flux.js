const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			People: null,
			Vehicles: null,
			Planets: null,
			Species: null,
			Films: null,
			Starships: null,
			Character: null
		},
		actions: {
			loadPeople: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ People: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    });
                }
            },
			loadVehicles: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ Vehicles: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    });
                }
            },
			loadPlanets: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ Planets: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    });
                }
            },
			loadSpecies: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ Species: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    });
                }
            },
			loadFilms: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ Films: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    });
                }
            },
			loadStarships: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ Starships: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    });
                }
            },
			loadCharacter: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ Character: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    });
                }
            },
			loadFavorites: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ Favorites: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    });
                }
            },
			addFavorites: (element) => {
				let { Favorites } = getStore();
				Favorites.push(element);
				setStore({Favorites});
			},
			removeFavorites: (element) => {
				let { Favorites } = getStore();
                let  list = Favorites.filter(item => item !== element);
                setStore({Favorites: list});

			}
		}
	};
};

export default getState;
