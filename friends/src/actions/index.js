import axios from 'axios';

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const getFriendsList = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axios
        .get('http://localhost:5000')
        .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res }))
        .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }))
};