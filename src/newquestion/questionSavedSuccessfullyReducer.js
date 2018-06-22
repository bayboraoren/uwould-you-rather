import {SAVE_CLEAR, SAVE_SUCCESS} from "../app/AppActionTypes";

export default function questionSavedSuccessfullyReducer(state = {}, action) {
    switch (action.type) {
        case SAVE_SUCCESS:
            return action.saved
        case SAVE_CLEAR:
            return action.saved
        default:
            return state
    }
}