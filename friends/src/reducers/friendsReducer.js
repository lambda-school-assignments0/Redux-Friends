import {
    LOGIN_START,
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
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            }
        case FETCH_FRIENDS_START:
            return {
                ...state,
                loggingIn: false,
                fetchingFriends: true,
                error: ""
            }
        case FETCH_FRIENDS_SUCCESS:
            console.log(action)
            return {
                ...state,
                friends: action.payload,
                fetchingFriends: false,
                error: ""
            }
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        default:
            return state;
    }
};