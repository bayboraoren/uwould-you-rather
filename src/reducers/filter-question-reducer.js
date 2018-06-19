import {FILTER_QUESTION} from "../actions/filter-question-action"

export default function filterQuestionReducer(state = {}, action) {
    switch (action.type) {
        case FILTER_QUESTION:
            return action.filterQuestion
        default:
            return state
    }
}