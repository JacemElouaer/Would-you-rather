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
        const {idsA  , idsU} =  this.props 
        if(idsA.includes(this.props.id)){
        this.setState({ 
            answered :  true
        })}
        if(idsU.includes(this.props.id)) {
        this.setState({ 
            answered : false
        })} 
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
        if (answer==="") { 
        alert('You did not choose an answer')} 
            else{
                this.setState({
                    answered:  true
                  }) 
                  
                dispatch(handleanswerQuestionU({ authedU, id ,answer}));  
                dispatch(handleanswerQuestion({ authedU, id ,answer}));  
            }
        }
    render() {
        // const {id ,question} = this.props
        const  {question ,  user , authedUser , id} = this.props? this.props :  undefined  
        const {name  , avatarURL} =  user? user :  {undefined};  
        const  authedU =  authedUser["authedUser"];
        const {optionOne,optionTwo} =  question? question : {undefined};  
        const { answered} =  this.state; 
        return (
            <Fragment>
                {authedU?
                <div>
               {answered===false? 
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
                    <QuestionStats stats={this.props}></QuestionStats>
            }
            </div>
            : 
            <Redirect to={{pathname :  '/login' , state:{target : `/questions/${id} `}}}> </Redirect>
            }
                

            </Fragment>
        )
    }
}
function mapStateToProps({users,questions , authedUser}, props) { 
    const {id} =  props.match.params ; 
    const question =questions[id.trim()]? questions[id.trim()] :undefined;
    const user =  question? users[question.author]: undefined; 
    let ids=  Object.keys(questions).sort((a, b) =>questions[b].timestamp -  questions[a].timestamp); 
    let idsA = ids.filter((id)=>{
        if(questions[id].optionOne.votes.includes(authedUser["authedUser"]) || questions[id].optionTwo.votes.includes(authedUser["authedUser"])){
            return id
        }
        return null
    })
    let idsU =  ids.filter((id)=>{
        if(!(questions[id].optionOne.votes.includes(authedUser["authedUser"]) || questions[id].optionTwo.votes.includes(authedUser["authedUser"]))){
            return id
        }
        return null
    })
    
    return { 
        user,
        authedUser,
        questions,
        id : id.trim() ,
        question , 
        ids,
        idsU : idsU,
        idsA :  idsA,
    }
}

export default connect(mapStateToProps)(AnswerQuestion)


