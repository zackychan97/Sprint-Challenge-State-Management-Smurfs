import React from "react";

const Smurfs = props => {
    return (
        <div className="smurf-card">
            <h2>{props.name}</h2>
            <h3>{props.height}</h3>
            <h3>{props.age}</h3>
        </div>
    )
}

export default Smurfs