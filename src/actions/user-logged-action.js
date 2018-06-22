import {SET_LOGGED_USER} from "./action-types"
import {UPDATE_LOGGED_USER} from "./action-types"


export function setLoggedUser (user){
    return{
        type: SET_LOGGED_USER,
        user,
    }
}


export function updateLoggedUser(user,id, answer){
    return{
        type: UPDATE_LOGGED_USER,
        user,
        id,
        answer,
    }
}
