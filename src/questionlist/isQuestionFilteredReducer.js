import {FILTER_QUESTION} from "../app/AppActionTypes"

export default function filterQuestionReducer(state = {}, action) {
    switch (action.type) {
        case FILTER_QUESTION:
            return action.filterQuestion
        default:
            return state
    }
}