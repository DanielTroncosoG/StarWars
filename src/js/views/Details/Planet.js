import React from 'react';
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Spinner from '../../component/Spinner';
import { Link } from "react-router-dom";

function Planet() {
    const param = useParams();
    const { store, actions } = useContext(Context);
    const { planets, Favorites } = store;

    useEffect(() => {
        actions.loadPlanets(`https://www.swapi.tech/api/planets/${param.id}`);
    }, []);
    const loadPicture = name => {
        return name.toLowerCase().split("-") + ".jpg";
    };
    return (
        <div className="row my-3">
            {!!planets && vechicles.data.result.properties.name.split(" ").join("").toLowerCase() === param.name ? (
                <div className="card planet my-0">
                    <div className="row">
                        <div className="col-md-6 planet-img">
                            <div className="row">
                                <img src={`/img/planets/${loadPicture(planets.data.result.properties.name)}`} className="img-fluid" alt={`img of ${planets.data.result.properties.name}`}/>
                            </div>
                            <div className="row">
                                <div className="d-flex justify-content-around py-3">
                                    <Link to="/Planets" className="btn-link">
                                        <button type="button" className="btn btn-dark">
                                            Back to Planets
                                        </button>
                                    </Link>
                                    {(Favorites.indexOf(character.data.result.properties.name) === -1) ?
                                        (
                                            <button className="btn btn-danger" onClick={() =>{
                                                actions.addFavorites(planets.data.result.properties.name);
                                            }}>Add Favorites
                                            </button>
                                        ) : (
                                            <div className="btn btn-danger" onClick={()=>{
                                                actions.removeFavorites(planets.result.properties.name);
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
                                    {planets.data.result.properties.name}
                                </h3>
                                <ul className="list-group text-center">
                                    <li className="list-group-item d-flex">Climate: {vehicles.result.properties.climate}</li>
                                    <li className="list-group-item d-flex">Gravity: {vehicles.result.properties.gravity}</li>
                                    <li className="list-group-item d-flex">Population: {vehicles.result.properties.population}</li>
                                    <li className="list-group-item d-flex">Terrain: {vehicles.result.properties.terrain}</li>
                                    <li className="list-group-item d-flex">Surface Water: {vehicles.result.properties.surface_water}</li>
                                    <li className="list-group-item d-flex">Population: {vehicles.result.properties.population}</li>
                                    <li className="list-group-item d-flex">Orbital Period: {vehicles.result.properties.orbital_period}</li>
                                    <li className="list-group-item d-flex">rotation_period: {vehicles.result.properties.rotation_period}</li>                        
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

export default Planet;
