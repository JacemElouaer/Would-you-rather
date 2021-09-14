import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import QuestionNav from '../components/QuestionNav'
import {withRouter} from "react-router-dom";
import QuestionAnswered  from './QuestionAnswered';


export class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Page: "first-page",
        }
        this.changePage =  this.changePage.bind(this)
    }
    changePage (page){
        if(page==="first-page"){
        this.setState({
            Page:"first-page"
        })}
        if(page==="second-page"){ 
                this.setState({
            Page : "second-page"  
            })
        }
    }
    render() {
        const { Page } = this.state
        const { idsU , idsA } = this.props
        
        return (
            <Fragment>
                <div className="container-questions">
                    <QuestionNav change={this.changePage}/> 
                    <div className="center">
                        {Page ==="first-page" ?
                            <ul>
                                {idsU.map((id) => <Question key={id} id={id} />)}
                            </ul>
                            :
                            <ul>
                            {idsA.map((id) => <QuestionAnswered key={id} id={id}  />)}
                            </ul>}
                    </div> 
                </div>
            </Fragment>
        )
    }
}
function mapStateToProps({questions , authedUser}) {
    const authedU = authedUser["authedUser"]
    let ids=  Object.keys(questions).sort((a, b) =>questions[b].timestamp -  questions[a].timestamp); 
    let idsA = ids.filter((id)=>{
        if(questions[id].optionOne.votes.includes(authedU) || questions[id].optionTwo.votes.includes(authedU)){
            return id
        }
        return null
    })
    let idsU =  ids.filter((id)=>{
        if(!(questions[id].optionOne.votes.includes(authedU) || questions[id].optionTwo.votes.includes(authedU))){
            return id
        }
        return null
    })
    

    return {
        authedU,
        idsA,
        idsU
    }
}

export default withRouter(connect(mapStateToProps)(Questions))
