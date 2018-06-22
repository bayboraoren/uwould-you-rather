import {RECEIVE_QUESTIONS} from "../app/AppActionTypes";

export function questionListAction(questionList) {
    return {
        type: RECEIVE_QUESTIONS,
        questionList: questionList,
    }
}