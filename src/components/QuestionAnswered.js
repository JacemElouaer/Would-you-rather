import React, { Component , Fragment } from 'react'
import { connect }  from 'react-redux'
import { prepareQuestion } from '../utils/api';
import {Link ,  withRouter} from 'react-router-dom';



class QuestionAnswered extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStats :  false
        }
    } 
    showStatistics =  (e)=>{
        e.preventDefault();
        this.setState({
            showStats: true
        })
    } 
    render() {
        
        const {question ,  id }=  this.props? this.props  : null;
        const {optionOne,user}= question; 
        const questionType  =  "answered";
        return (
            <Fragment>
                { user? 
              
                    
                <div className="question">  
                    <div>
                        <div className="question-header">
                            <h6>
                            {`${question.user.name} asks :`}
                            </h6>
                        </div>
                        <div className="question-info">
                            <div className="question-info-avatar hr">
                                <img src={question.user.avatarURL} alt=""  className="question-avatar"/>
                            </div>
                            <div className="question-info-content">
                                <div>
                                    <h6>You Answered for</h6> 
                                    <p>-- {optionOne.text} --</p>
                                </div> 
                                <Link  to={`/questions/${id}/${questionType}`} className="btn-question">View Poll</Link>
                            </div> 
                        </div>
                    </div>
                </div> 
                 : <p>uses is undefined !!</p> }
            </Fragment>
        )
    }
}
function mapStateToProps({authedUser , users ,  questions} , {id}){

    const question = questions? questions[id]: null;
    const user =  users? users[question.author]: null;
    const answer =  user? user.answers[id] : undefined ;  

    return {
        authedUser, 
        question: question ? prepareQuestion (question , user , authedUser): null,
        user, 
        answer
    }
}

export default withRouter(connect(mapStateToProps)(QuestionAnswered))
