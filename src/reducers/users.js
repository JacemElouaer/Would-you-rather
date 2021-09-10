import {RECEIVE_USERS ,  ANSWER_QUESTION_U ,  ADD_QUESTION_U }  from '../actions/users'



export default function users(state={},  action){
    switch(action.type){
        case RECEIVE_USERS : 
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION_U : 
        const  {authedUser ,  id , answer} = action 
            return {
                ...state,
                [authedUser] :{
                    ...state[authedUser], 
                    answers : {
                        ...state[authedUser].answers,
                        [id] : answer
                    }
                }
            }
        case   ADD_QUESTION_U :
            return {
                ...state ,
                [action.authedUser] :{
                    ...state[action.authedUser],
                    questions : state[action.authedUser].questions.concat([action.id])
                    
                }
            }


        default :
            return state
    }
}

