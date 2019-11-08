import axios from "axios";


export const FETCH_START = "FETCH_START";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

//make the axios call to get the smurf data

export const fetchSmurfsData = () => dispatch => {
    dispatch ({ type: FETCH_START });

    axios
    .get("http://localhost:3333/smurfs")
    .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.message }))
}