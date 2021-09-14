import { 
    RECEIVE_QUESTION,
    ANSWER_QUESTION ,
    ADD_QUESTION
} from '../actions/questions';  


export default function questions(state={} , action){
    switch (action.type){
        case RECEIVE_QUESTION: 
            return {
                ...state, 
                ...action.questions
            } 
        case ANSWER_QUESTION:  
        const {id ,  authedUser ,  answer} =  action  
            return {
                ...state,
                [id]:{
                    ...state[id],
                    [answer]:{
                        ...state[id][answer],
                        votes:state[id][answer].votes.concat([authedUser])
                    }    
                } 
            }
        case ADD_QUESTION : 
            const {question } = action;  
            return {
                ...state, 
                [question.id]:question
            }
        default :  
            return state 
    }
}