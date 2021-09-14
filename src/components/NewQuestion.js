import React, { Component  ,  Fragment } from 'react'
import { connect } from 'react-redux'
import  {handleAddQuestion} from  "../actions/questions"
import { Redirect } from 'react-router-dom'

export class NewQuestion extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            optionOneText   : "",
            optionTwoText :  "", 
            ToHome : false
            
        }
    } 
    change  = (e)=> {
        e.preventDefault(); 
        if(e.target.id==="optionOne"){
            this.setState({
                optionOneText : e.target.value
                
            }) 
        } 
        if(e.target.id==="optionTwo"){
            this.setState({
                optionTwoText : e.target.value
            })
        }
    }
    addQuestion = (e)=>{
        e.preventDefault();
        const  {dispatch ,authedUser} =  this.props ; 
        const  {optionOneText, optionTwoText} = this.state;

        if(authedUser["authedUser"]!==""){
            const author =  authedUser["authedUser"]
            dispatch(handleAddQuestion({optionOneText, optionTwoText, author}))
            this.setState({
                optionOne :"", 
                optionTwo : "",
                ToHome :true
            })
        }

    }
    render() {
        const  {optionOneText, optionTwoText,  ToHome} = this.state;
        const {authedUser} =  this.props;
        
        if (ToHome){
            return <Redirect to='/'></Redirect>
        }
 

        return (
            <Fragment>
                {
                    authedUser["authedUser"]===""?
                    <Redirect to={{pathname :"/NotFound" ,
                                    state:{target : "/add"} }}></Redirect>:
                    <div className="new-question">
                    <div className="new-question-header">
                    <h1 className="center">Create New Question</h1>
                    </div>
                    
                        <br/>
                        <form action="">
                        <div className="new-question-text">
                        <p>Complete the new question</p>
                         </div>
                        
                        <h4>Would you rather__</h4>
                        <br />
                        
                        <div className="input mb-3">
                           <input type="text" className="form-control"  id="optionOne" placeholder="First option" value={optionOneText} onChange={this.change}/>
                            <hr/>
                           <input type="text" className="form-control "id="optionTwo" placeholder=" option"  value={optionTwoText} onChange={this.change}/>
                        </div>

                   <button type="submit" className="btn-login" onClick={(e)=>this.addQuestion(e)}>Submit</button>
                    </form>
                    

                </div>}

            </Fragment>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser,
    }
}
export default connect(mapStateToProps)(NewQuestion)
