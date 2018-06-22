import {FILTER_QUESTION} from "../app/AppActionTypes"

export function filterQuestion (filterQuestion){
    return{
        type: FILTER_QUESTION,
        filterQuestion,
    }
}