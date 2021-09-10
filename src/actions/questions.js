import saveQuestionAnswer from "../utils/api";  
import {saveQuestion} from  "../utils/api";
import {handleAddQuestionUser} from  "../actions/users";
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';  
export const ANSWER_QUESTION = 'ANSWER_QUESTION'; 
export const ADD_QUESTION = 'ADD_QUESTION'; 



export function receiveQuestions(questions){
    return{
        type :  RECEIVE_QUESTION,
        questions
    }
}
export function answerQuestion(info){
    return {
        type : ANSWER_QUESTION, 
        authedUser :  info.authedU, 
        id :  info.id, 
        answer :  info.answer
    }
} 
export default function handleanswerQuestion(info){
    return (dispatch)=>{
        console.log(info)
        dispatch(answerQuestion(info)) 
        
        return saveQuestionAnswer(info)
        .catch((e)=>{
            console.log("hello error ",e)
            } 
        )
    }
}
export function addQuestion(question){
    return {
        type : ADD_QUESTION, 
        question
    }
}
export function handleAddQuestion(question){
    const {optionOneText, optionTwoText, author} = question
    console.log("step  3")
    console.log(author)
    return (dispatch)=>{
        dispatch(addQuestion(question))
        return saveQuestion({optionOneText, optionTwoText, author}).then(formatted=>{
            console.log("this is authedUser" , formatted["author"])
            dispatch(handleAddQuestionUser(formatted["id"],formatted["author"]))
        }).catch((e)=>{
            console.log("hello error", e)
        })
    }
} 