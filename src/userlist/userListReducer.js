import {RECEIVE_USERS} from "../app/AppActionTypes";

export default function userListReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.userList
            }
        default:
            return state
    }
}