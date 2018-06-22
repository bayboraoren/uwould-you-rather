import {ADD_QUESTION} from "../app/AppActionTypes"

export default function newQuestionReducer(state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        default:
            return state
    }
}