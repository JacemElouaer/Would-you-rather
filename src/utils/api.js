import { 
    _getUsers, 
    _getQuestions, 
    _saveQuestionAnswer,
    _saveQuestion,
} from "./_DATA.js" 

export function getInitialData(){
    return Promise.all([
        _getUsers(), 
        _getQuestions(), 
    ]).then(([users ,questions]) =>({
        users , questions,
    }))
} 

export default function saveQuestionAnswer(info){
    return _saveQuestionAnswer(info)
} 
export function saveQuestion(question){
    return _saveQuestion(question)
}



export function prepareQuestion (question , user , authedUser)
{
  const {author, timestamp, optionOne, optionTwo } =  question
  return { 
    author, 
    timestamp,
    optionOne,
    optionTwo,
    user,
    authedUser
  }
}


