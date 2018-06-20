import {receiveUsers} from "./users-action"
import {getInitialData} from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading'
import {receiveQuestions} from "./question-action";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users,questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}