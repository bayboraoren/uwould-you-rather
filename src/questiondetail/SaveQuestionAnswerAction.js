import {saveQuestionAnswer} from "../utils/api"
import {SAVE_CLEAR, SAVE_SUCCESS} from "../app/AppActionTypes";


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


export function saveSuccess(saved){
    return {
        type: SAVE_SUCCESS,
        saved,
    }
}

export function saveClear(){
    return {
        type: SAVE_CLEAR,
        saved:false,
    }
}