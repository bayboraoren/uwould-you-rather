import {SET_LOGGED_USER, UPDATE_LOGGED_USER} from "../actions/user-logged-action";

export default function userLoggedReducer(state = {}, action) {
    switch (action.type) {
        case SET_LOGGED_USER:
            return {
                ...state,
                ...action.user,
            }
        case UPDATE_LOGGED_USER:

            const user = action.user
            const id = action.id
            const answer = action.answer
            user.answers[id] = answer

            return {
                ...state,
                ...user
            }
        default:
            return state
    }
}