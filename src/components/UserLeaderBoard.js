import React, { Component  , Fragment } from 'react'
import { connect } from 'react-redux' 


export class UserLeaderBoard extends Component {
    
    render() {
        const {users ,  user } =  this.props ;  
        const  user_info =  users[user]
        const  ansered_questions = Object.keys(user_info["answers"]).length;  
        const questions_created = (user_info["questions"]).length; 
        const avatar_img =  user_info["avatarURL"]
         

            return (
            <Fragment>
               <div className="container-leader"> 
               <div className="leader-info-avatar">
               <div className="avatar-leader">
                   <img src={avatar_img} alt="" className="question-avatar" />
               </div>
               </div>
               <div className="info-leader">
                   <h5 className="leader-title">{user_info["name"]}</h5>
                   <div className="leader-info-an">
                       <p className="leader-label">Answered Questions</p>
                       <span>{ ansered_questions }</span>
                   </div>
                   <div className="leader-info-cre">
                       <p className="leader-label">Created Questions</p>
                       <span>{ questions_created }</span>
                    </div>
               </div>
               <div className="stats-leader">
                   <div className="stats">
                       <div className="stats-header">
                          
                       </div>
                       <div className="stats-info">
                        <div className="stats-content">
                            {
                                ansered_questions + questions_created
                            }
                        
                        </div>
                       </div>
                   </div>
                  
                       </div> 
                </div>
            </Fragment>

        )
    }
}
function mapStateToProps({users}){
    return {
        users, 
    }
}
export default connect(mapStateToProps)(UserLeaderBoard)
