import React, { Component, Fragment } from 'react'
import handleanswerQuestion  from  '../actions/questions'
import  handleanswerQuestionU from '../actions/users'  
import { connect } from 'react-redux' 
import {Redirect } from 'react-router-dom'
import  QuestionStats from './QuestionStats'


export class AnswerQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answer : "",
            answered: false, 
            direction: "/"
                }
    }
    componentDidMount(){
        if(this.props.questionType==="answered"){
        this.setState({ 
            answered :  true
        })}
        else {
        this.setState({ 
            answered :  false
        })} 
        this.props.location.setState({})
    }
    
    onChangeValue = (e)=>{
        this.setState({
            answer: e.target.value,
            answered : false
        })
    }  
    
    answered = (e)=>{
        e.preventDefault(); 
        const {dispatch ,  authedUser , id } =  this.props
        const  authedU =  authedUser["authedUser"];
        const {answer} =  this.state
        console.log("this is " , authedUser)
        this.setState({
          answered:  true
        }) 
        if (answer==="") { 
        alert('You did not choose an answer')} 
        dispatch(handleanswerQuestion({ authedU, id ,answer}));  
        dispatch(handleanswerQuestionU({ authedU, id ,answer}));  
         
    }



    render() {
        // const {id ,question} = this.props
        const  {question ,  user , authedUser} =   this.props? this.props :  undefined  
        const {name  , avatarURL} =  user? user :  {undefined};  
        const  authedU =  authedUser["authedUser"];
        const {optionOne,optionTwo} =  question? question : {undefined};  
        const { answered} =  this.state; 
        return (
            <Fragment>
                {authedU!==""?
                <div>
               {!answered? 
                
                <div className="ans-question-center">
                    <div className="ans-question">
                        <div>
                            <div className="question-header">
                                <h6>
                                    {`${name} asks :`}
                                </h6>
                            </div>
                            <div className="question-info">
                                <div className="question-info-avatar hr">
                                    <img src={avatarURL} alt=""  className="question-avatar"/>
                                </div>
                                <div className="question-info-content">
                                        <h6>Would you rather</h6>
                                        <div onChange={(e)=>this.onChangeValue(e)} className="ans-question-radio">
                                            <input type="radio" value="optionOne" name="gender"/> {optionOne.text}
                                            <br/>
                                            <input type="radio" value="optionTwo" name="gender" /> {optionTwo.text}
                                        </div>
                                        <button className="btn-question" type="submit" onClick={(e)=>this.answered(e)}>Submit</button>
                                        
                                        <p>{authedU}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div> 
                    <QuestionStats stats={this.props}></QuestionStats>
                   </div>
            }
            </div>
            : 
            <Redirect to={{pathname :  '/NotFound' }}> </Redirect>
            }
                

            </Fragment>
        )
    }
}
function mapStateToProps({users,questions , authedUser}, props) { 
    const {id} =  props.match.params; 
    const {questionType} =  props.match.params;  
    const question = questions? questions[id] : undefined;
    const user =  question? users[question.author]: undefined; 
    
    return { 
        questionType,
        user,
        authedUser,
        question , 
        id 
    }
}

export default connect(mapStateToProps)(AnswerQuestion)


