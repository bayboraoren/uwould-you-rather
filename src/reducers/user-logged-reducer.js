import {SET_LOGGED_USER} from "../actions/user-logged-action";

export default function userLoggedReducer(state = {}, action) {
    switch (action.type) {
        case SET_LOGGED_USER:
            return {
                ...state,
                ...action.user,
            }
        default:
            return state
    }
}