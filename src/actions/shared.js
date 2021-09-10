import { getInitialData } from '../utils/api'
import {receiveQuestions} from './questions'
import { receiveUsers } from '../actions/users'
import { SetAutedUser } from './authedUser'
import { showLoading , hideLoading } from 'react-redux-loading' ; 

export const Authed_id = ""; 
export function handleInitialData(){
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users , questions})=>{
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(SetAutedUser(Authed_id))
            dispatch(hideLoading())
        })
    }
}