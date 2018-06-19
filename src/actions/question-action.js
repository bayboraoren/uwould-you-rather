import {saveQuestion, saveQuestionAnswer} from "../utils/api";
import {saveSuccess} from "./save-success-action";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
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


export function handleSaveQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
        const {userLogged} = getState()

        return saveQuestionAnswer({
            authedUser: userLogged.id,
            qid,
            answer,
        })
            .then(() => dispatch(saveSuccess(true)))
    }
}

