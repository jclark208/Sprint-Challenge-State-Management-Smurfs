import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';
export const ADD_START = "ADD_START"
export const ADD_SUCCESS = "ADD_SUCCESS"
export const ADD_FAIL = "ADD_FAIL"

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
    }
    )
    .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }));
}; 

export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: ADD_START });
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADD_SUCCESS,
                payload: res
            })
        })
        .catch(err => dispatch({ type: ADD_FAIL, 
            payload: err }));
}; 