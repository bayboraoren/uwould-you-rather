import {RECEIVE_USERS} from "../app/AppActionTypes";

export function userListAction (userList){
    return{
        type: RECEIVE_USERS,
        userList,
    }
}
