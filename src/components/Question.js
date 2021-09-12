import React, { Component , Fragment } from 'react'
import { connect }  from 'react-redux'
import { prepareQuestion } from '../utils/api';
import {Link ,  withRouter} from 'react-router-dom';



class Question extends Component {
    viewQuestion =  (e ,id)=>{
        this.props.history.push(`/Tweet/${id}`) ;  

        
    }
    render() {
        
        const {question ,  id ,  authedUser}=  this.props? this.props  : null;
        const { optionOne,user}= question; 
        const questionType =  "unanswered"  ; 
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
                                    <h6>Would you rather</h6> 
                                    <p>-- {optionOne.text} --</p>
                                </div> 
                                {authedUser["authedUser"]===""?
                                <Link  to={`/login`} className="btn-question">Login to Answer</Link>
                                    : 
                                 <Link  to={`/questions/${id}/${questionType}`} className="btn-question">View Poll</Link> 
                                }
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
    const question = questions? questions[id] : null;
    const user =  users? users[question.author]: null ;

    return {
        authedUser, 
        question: question ? prepareQuestion (question , user , authedUser): null,
    }
}

export default withRouter(connect(mapStateToProps)(Question))
