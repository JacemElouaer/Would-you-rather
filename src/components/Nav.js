import React , { Component , Fragment }    from 'react' 
import { connect } from 'react-redux'  ;  
import {Link} from 'react-router-dom'
import {handleLogOutAutedUser} from  '../actions/authedUser'; 
import anonymos from  '../images/anonymos.jpg'




 
class Nav extends Component { 
  logout =  (e)=>{
    const  {dispatch , authedUser} =  this.props
    if (!(authedUser["authedUser"]==="")){
      e.preventDefault();  
      dispatch(handleLogOutAutedUser())
    }
  }
  render() { 
    const {authedUser ,  users} =   this.props;  
    const  authedU =  authedUser["authedUser"]==="" ?  undefined: authedUser["authedUser"]; 
    const avatarURL =  authedU? users[authedU].avatarURL : undefined; 
  
    return (
<Fragment>

        <nav className="navbar navbar-expand navbar-light bg-light regular general-nav">
        <div className="container-fluid ">
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link " to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link visited" to="/add">New Question</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link visited" to="/leaderboard">Leader Board</Link>
              </li>
            </ul>
            <form className="d-flex">
            </form>
          </div>
        </div>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav second">
              <li className="nav-item">
               { authedU?
               <p className="nav-link " >loged to {authedU}</p> :
                <p>no user connected</p>
               
               } 
              </li>
              <div className="nav-item ">
              {
                authedU?  
                  <img className="avatar-login" src ={avatarURL}
                                      alt="loged-icone"/>:
                  <img className="anonymos-avatar-login" src ={anonymos} alt="None-logged-icone"/> 
              }
              </div>
              <li className="nav-item">
              {
                authedU?  
                <div onClick={this.logout}>
                <Link className="nav-link"   to="/login">Log out</Link>
                </div> : 
                 <Link className="nav-link"  to="/login">Login</Link>
              }
              </li>
            </ul>
            <form className="d-flex">
            </form>
          </div>
        </div>
      </nav>
      </Fragment>
      )
  }
} 
function mapStateToProps({authedUser , users}){
  return {
    authedUser,  
    users
    
  }
}

export default connect(mapStateToProps)(Nav)
