import {SAVE_CLEAR, SAVE_SUCCESS} from "../actions/save-success-action";

export default function saveSuccessReducer(state = {}, action) {
    switch (action.type) {
        case SAVE_SUCCESS:
            return action.saved
        case SAVE_CLEAR:
            return action.saved
        default:
            return state
    }
}