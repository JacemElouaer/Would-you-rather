import React ,{ Component , Fragment} from 'react'
import '../index.css' 
import {connect} from 'react-redux'; 

class QuestionNav extends Component {
    change = (e)=>{ 
        e.preventDefault();
         this.props.change(e.target.className); 
    }
    
    render() {
        const  {authedUser} =  this.props ;  
        const authedU =  authedUser["authedUser"] ;  
    return (
         <Fragment>  
             <nav>
                 
                        {authedU===""? 
                        <ul className="question-nav"> 
                            <div className="login-first" href = "/login">
                                    Please login first 
                            </div>
                        </ul>
                        : 
                        <ul className="question-nav"> 
                            <li onClick={(e)=>this.change(e)} className="first-page">
                                Unanswered questions
                            </li>
                            <li onClick={(event)=>{this.change(event)}} className="second-page">
                                answered questions
                            </li>
                        </ul>}
                
                 </nav>          
        </Fragment>
    )
}
}
function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionNav)
