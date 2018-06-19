import {
    _getUsers,
    _getQuestions,
} from './_DATA.js'
import {_saveQuestion, _saveQuestionAnswer} from "./_DATA";

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users,questions]) => ({
        users,
        questions,
    }))
}



export function saveQuestion(question) {
    return _saveQuestion(question)
}

//authedUser, qid, answer
export function saveQuestionAnswer(questionAnswer){
    return _saveQuestionAnswer(questionAnswer)
}