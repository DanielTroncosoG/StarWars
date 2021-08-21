import React from 'react';
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Spinner from '../../component/Spinner';
import { Link } from "react-router-dom";

function Starship() {
    const param = useParams();
    const { store, actions } = useContext(Context);
    const { starships, Favorites } = store;

    useEffect(() => {
        actions.loadStarships(`https://www.swapi.tech/api/starships/${param.id}`);
    }, []);
    const loadPicture = name => {
        return name.toLowerCase().split("-") + ".jpg";
    };
    return (
        <div className="row my-3">
            {!!starships && starships.data.result.properties.name.split(" ").join("").toLowerCase() === param.name ? (
                <div className="card starship my-0">
                    <div className="row">
                        <div className="col-md-6 starship-img">
                            <div className="row">
                                <img src={`/img/starships/${loadPicture(starships.data.result.properties.name)}`} className="img-fluid" alt={`img of ${starships.data.result.properties.name}`}/>
                            </div>
                            <div className="row">
                                <div className="d-flex justify-content-around py-3">
                                    <Link to="/Starships" className="btn-link">
                                        <button type="button" className="btn btn-dark">
                                            Back to Starships
                                        </button>
                                    </Link>
                                    {(Favorites.indexOf(character.data.result.properties.name) === -1) ?
                                        (
                                            <button className="btn btn-danger" onClick={() =>{
                                                actions.addFavorites(starships.data.result.properties.name);
                                            }}>Add Favorites
                                            </button>
                                        ) : (
                                            <div className="btn btn-danger" onClick={()=>{
                                                actions.removeFavorites(starships.result.properties.name);
                                            }}>
                                                Remove Favorites
                                            </div>
                                        )
                                        }    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h3 className="card-title text-center">
                                    {starships.data.result.properties.name}
                                </h3>
                                <ul className="list-group text-center">
                                    <li className="list-group-item d-flex">Model: {starships.result.properties.model}</li>
                                    <li className="list-group-item d-flex">Cost: {starships.result.properties.cost_in_credits}</li>
                                    <li className="list-group-item d-flex">Max Speed: {starships.result.properties.max_atmosphering_speed}</li>
                                    <li className="list-group-item d-flex">Passengers: {starships.result.properties.passengers}</li>
                                    <li className="list-group-item d-flex">HyperDrive Rating: {starships.result.properties.hyperdrive_rating}</li>
                                    <li className="list-group-item d-flex">Crew: {starships.result.properties.crew}</li>
                                    <li className="list-group-item d-flex">Length: {starships.result.properties.length}</li>
                                    <li className="list-group-item d-flex">Consumables: {starships.result.properties.consumables}</li>
                                    <li className="list-group-item d-flex">Vehicle Class: {starships.result.properties.vehicle_class}</li>
                                    <li className="list-group-item d-flex">Manufacturer: {starships.result.properties.manufacturer}</li>                        
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ):
            <Spinner />
        }
            
        </div>
    );
}

export default Starship;
