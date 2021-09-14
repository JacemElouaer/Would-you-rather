export const  RECEIVE_USERS  = 'RECEIVE_USERS'
export const  ANSWER_QUESTION_U  =  "ANSWER_QUESTION_U"
export const ADD_QUESTION_U =  "ADD_QUESTION_U"




export function receiveUsers(users) {
    return {
        type:  RECEIVE_USERS,
        users
    }
}

export function addQuestion(id, authedUser) {
    return {
        type :  ADD_QUESTION_U,
        id ,
        authedUser
    }
}
export function handleAddQuestionUser(id ,  authedUser){
    return (dispatch)=>{
        dispatch(addQuestion(id ,  authedUser))
    }
}

export  function answerQuestionU(info){
    return {
        type : ANSWER_QUESTION_U,
        authedUser :  info.authedU,
        id :  info.id,
        answer :  info.answer
    }
} 


export default function handleanswerQuestionU(info){
    return (dispatch)=> {
        dispatch(answerQuestionU(info))
    }
}




