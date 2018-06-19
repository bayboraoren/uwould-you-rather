export const SET_LOGGED_USER = 'SET_LOGGED_USER'

export function setLoggedUser (user){
    return{
        type: SET_LOGGED_USER,
        user,
    }
}