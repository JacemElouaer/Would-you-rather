export const SET_AUTHED_USER = 'SET_AUTHED_USER' 
export const LOG_OUT_AUTHEDUSER = 'LOG_OUT_AUTHEDUSER' 


export function SetAutedUser(id){
    return {
        type: SET_AUTHED_USER,
        id
    }
}
export function handleSetAutedUser(id){
    return (dispatch) => {
        dispatch(SetAutedUser(id))
    }
} 
export function LogoutAuthedUser(){
    return {
        type :  LOG_OUT_AUTHEDUSER , 
    }
}
export function handleLogOutAutedUser(){
    console.log("just enterd handle")
    return (dispatch) => {
        dispatch(LogoutAuthedUser())
    }
}