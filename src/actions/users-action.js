import {RECEIVE_USERS} from "./action-types"

export function receiveUsers (users){
    return{
        type: RECEIVE_USERS,
        users,
    }
}

