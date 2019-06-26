import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE
} from '../actions';

const initialState = {
    friends: [],
    loggingIn: false,
    fetchingFriends: false,
    savingFriends: false,
    updatingFriends: false,
    deletingFriends: false,
    error: ""
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};