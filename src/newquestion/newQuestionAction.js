import {saveQuestion} from "../utils/api";
import {ADD_QUESTION} from "../app/AppActionTypes";

export function handleNewQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {userLogged} = getState()

        return saveQuestion({
            author: userLogged.id,
            optionOneText,
            optionTwoText,
        })
            .then((question) => dispatch(addQuestion(question)))
    }
}


export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}
