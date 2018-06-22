import {RECEIVE_QUESTIONS} from "../app/AppActionTypes"

export default function questionListReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questionList
            }
        default:
            return state
    }
}

