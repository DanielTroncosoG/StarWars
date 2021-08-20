import React, {useContext} from 'react';
import Context from "/workspace/StarWars/src/js/store/appContext.js";

function Favorites() {
    const {store, actions} = useContext(Context);
    const {Favorites} = store;
    return (
        <div className="row">
            <div className="col-md-6 m-6">
                <ul className="list-group">
                    {
                        Favorites.lenght >= 1 ?
                        store.Favorites.map((value, i) => {
                            return <li className="list-group-item d-flex" key={i}>
                                {value}
                                <button type="button" className="btn btn-outline-dark" onClick={() => removeFavorites(value)} >Remove Favorite</button>
                            </li>;
                        }):(
                            <li className="list-group-item d-flex">No Favorites, yet</li>
                        )
                    }
                </ul>
            </div>
            
        </div>
    );
}

export default Favorites;
