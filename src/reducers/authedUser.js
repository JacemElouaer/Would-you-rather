import { 
    SET_AUTHED_USER,
    LOG_OUT_AUTHEDUSER
}   from '../actions/authedUser' ; 

export default function authedUser (state = {}, action = ""){
    switch (action.type){
    case SET_AUTHED_USER:  
        return {
            ...state, 
            authedUser :action.id
        }
    case LOG_OUT_AUTHEDUSER: 
        return {
            ...state, 
            authedUser :""
            }
    default:
        return state 
    }
}