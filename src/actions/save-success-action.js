export const SAVE_SUCCESS = 'SAVE_SUCCESS'
export const SAVE_CLEAR = 'SAVE_CLEAR'

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