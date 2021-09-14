import React, { Component ,  Fragment } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {connect}  from 'react-redux' ;  
import { Redirect } from 'react-router-dom';

export class QuestionStats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rate_one : 0,
            rate_two : 0
        }
    }
    componentDidMount() {
        const  {question} =   this.props.stats? this.props.stats :  undefined ;  
        const {optionOne,optionTwo} =  question? question : {undefined}; 
        const  {user_list} =  this.props;
        this.setState({
            rate_one : ((optionOne.votes.length/user_list.length)*100).toFixed(2),
            rate_two :  ((optionTwo.votes.length/user_list.length)*100).toFixed(2)
        })
    }
    render() {
        
        const  {id , question ,  user , authedUser } =   this.props.stats? this.props.stats :  undefined  
        const {users}  = this.props
        const {name  , avatarURL} =  user? user :  {undefined};  
        const {user_list} =  this.props;
        const  authedU =  authedUser["authedUser"];
        const {optionOne,optionTwo} =  question? question : {undefined}; 
        const {rate_two,  rate_one} = this.state ;  
        const class_one  = users[authedU].answers[id]==="optionOne" ? "ans_result_modif" : "ans-results";
        const class_two  = users[authedU].answers[id]==="optionTwo" ? "ans_result_modif" : "ans-results";
        const rate_chosen =  users[authedU].answers[id]==="optionOne" ?  "choice-one" : "choice-two";   
        
       
        return (
            <Fragment>
            { authedU!==""?
            <div className="ans-question-center-res">
                    <div className="ans-question-res">
                        <div>
                            <div className="question-header-res">
                                <h6>
                                    {`asked by ${name} :`}
                                </h6>
                            </div>
                            <div className="question-info-res">
                                <div className="question-info-avatar-res hr-res">
                                    <img src={avatarURL} alt=""  className="question-avatar-res"/>
                                </div>
                                <div className="question-info-content-res">
                                        <h5>Results : </h5>
                                        <div onChange={(e)=>this.onChangeValue(e)} className="ans-question-stats">
                                            <div className={`${rate_chosen} rate `}>Your Voice</div>
                                          
                                            <div className={`${class_one}`}> 
                                            <h5 className="ans-results-text"> {optionOne.text} ?</h5>
                                              <ProgressBar variant={"wanted_green"} height="200%" className="prgBar" label={`${rate_one}%`} now={rate_one}/>
                                              <p><strong>{`${optionOne.votes.length} out of ${user_list.length} votes`}</strong></p>
                                              </div>
                                            <div className={`${class_two}`}>
                                            <h5 className="ans-results-text">{optionTwo.text}</h5>
                                            <ProgressBar variant={"wanted_green"}  className="prgBar" label={`${rate_two}%`} now={rate_two}/>
                                            <p><strong>{`${optionTwo.votes.length} out of ${user_list.length} votes`} </strong></p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>: 
                <Redirect></Redirect>
                    }
                    </Fragment>
        )
    }
}
function mapStateToProps({users}){
    return {
        users,
        user_list : Object.keys(users)
    }

}

export default connect(mapStateToProps)(QuestionStats)
