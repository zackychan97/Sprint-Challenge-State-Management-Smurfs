import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { deleteSmurf } from "../../actions";
import { Fab } from "@material-ui/core";

const Smurfs = props => {
    const deleteSmurf = id => {
        props.deleteSmurf(id);
    }
  return (
    <>
     <div className="smurf-card">
        <h2>{props.name}</h2>
        <p>{props.age}</p>
        <p>{props.height}</p>
        <Fab color="secondary" aria-label="Delete">
          <DeleteIcon onClick={() => deleteSmurf(props.id)} />
        </Fab>
      </div>
    </>
    
  );
};
export default Smurfs;