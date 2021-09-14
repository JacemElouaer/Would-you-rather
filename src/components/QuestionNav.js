import React ,{ Component , Fragment} from 'react'
import '../index.css' 
import {connect} from 'react-redux'; 

class QuestionNav extends Component {
    change = (e)=>{ 
        e.preventDefault();
         this.props.change(e.target.className); 
    }
    
    render() {
    return (
         <Fragment>  
             <nav>
                        <ul className="question-nav"> 
                            <li onClick={(e)=>this.change(e)} className="first-page">
                                Unanswered questions
                            </li>
                            <li onClick={(event)=>{this.change(event)}} className="second-page">
                                answered questions
                            </li>
                        </ul>
                
                 </nav>          
        </Fragment>
    )
}
}


export default connect()(QuestionNav)
