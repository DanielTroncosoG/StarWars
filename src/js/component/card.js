import React from 'react';
import { Link } from 'react-router-dom';

function card(props) {
    const loadPicture = name => {
        return name.toLowerCase().split("-") + ".jpg";
    };
    return (
        props.elements &&
        props.elements.results.map((element, i) => (
            <div className="col-md-4" id={"char_" + i} key={i} >
                <div className="card my-3">
                    <img
                        src={`/img/${props.route}/${loadPicture(element.name)}`}
                        className="card-img-top" alt={`img of ${element.name}`}
                    />
                    <div className="card-body">
                        <h4 className="card-title fs-5 text-center">
                            {element.name}
                        </h4>
                    </div>
                    <div className="card-footer d-flex justify-content-around">
                        <Link to={`${props.route}/${element.name.split(" ").join("").toLowerCase()}/${element.uid}`}>
                            <button type="button" className="btn btn-outline-dark" >
                                Info
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        ))
    );
}

export default card;
