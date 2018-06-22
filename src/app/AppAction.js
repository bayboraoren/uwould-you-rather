import {getInitialData} from "../utils/api"
import {hideLoading, showLoading} from 'react-redux-loading'
import {questionListAction} from "../questionlist/questionListAction";
import {userListAction} from "../userlist/userListAction";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({userList,questionList}) => {
                dispatch(userListAction(userList))
                dispatch(questionListAction(questionList))
                dispatch(hideLoading())
            })
    }
}

