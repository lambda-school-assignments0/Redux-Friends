import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => localStorage.setItem('token', res.data.payload))
}

export const getFriendsList = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axios
        .get('http://localhost:5000/api/friends', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res }))
        .catch(err => {
            if (err.response.status === 403) {
                localStorage.removeItem('token');
            }
            dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err })
        });
};