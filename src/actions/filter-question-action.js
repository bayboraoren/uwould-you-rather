import {FILTER_QUESTION} from "./action-types"

export function filterQuestion (filterQuestion){
    return{
        type: FILTER_QUESTION,
        filterQuestion,
    }
}