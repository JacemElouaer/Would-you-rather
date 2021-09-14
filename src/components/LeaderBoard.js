import React, { Component  , Fragment } from 'react';   
import  UserLeaderBoard from  './UserLeaderBoard'; 
import { connect } from 'react-redux';  
import {Redirect} from  "react-router-dom";

export class LeaderBoard extends Component {

    render() {
        const { userList  , authedUser} = this.props;   
        return (   
           < Fragment>       
            {  authedUser["authedUser"]===""?
            
             <Redirect to={{ pathname:'/login', 
                         state : {target:"/leaderboard"} }}></Redirect>: 
             <div> {userList.map((user)=> 
                    <UserLeaderBoard  key={user} user= {user}></UserLeaderBoard> )}
            </div>
            }
            </Fragment>

        )
    }
}
function mapStateToProps({users , authedUser}){
    let userList =  Object.keys(users).sort((a,b)=>(users[b]['questions'].length+Object.keys(users[b]['answers']).length) - (users[a]['questions'].length+Object.keys(users[a]['answers']).length))
    return {
        authedUser,
        userList,
    }
}


export default connect(mapStateToProps)(LeaderBoard)  
