export const FILTER_QUESTION = 'FILTER_QUESTION'

export function filterQuestion (filterQuestion){
    return{
        type: FILTER_QUESTION,
        filterQuestion,
    }
}