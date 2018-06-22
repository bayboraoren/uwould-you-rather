import {SAVE_SUCCESS} from "./action-types"
import {SAVE_CLEAR} from "./action-types"

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