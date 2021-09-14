import React, { Component ,  Fragment } from 'react';
import Login_img from '../images/login-image.PNG';
import { connect }  from 'react-redux';
import { handleSetAutedUser  } from '../actions/authedUser'; 
import {  withRouter , Redirect } from  'react-router-dom' ;  




class Login extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            authedUser :  undefined,
            submit :  false , 
            direction :  "/",
        }
    } 
    
    login=(e)=>{
        e.preventDefault();
        const  {authedUser} = this.state
        const {dispatch}  =  this.props;

        authedUser? dispatch(handleSetAutedUser(authedUser)) :  
        alert('Please select a User'); 
        this.setState({
              submit :  true
        })
    } 
    
    handleChange=(e)=>{
        this.setState({
            authedUser: e.target.value,
        })
    }
    componentDidMount(props) {
        console.log("this is the target",this.props)
        this.props.location.state?
        this.setState({
            direction : this.props.location.state.target
        }):
        console.log("No target available") 
    }
    render() {
        const  {users , ids ,idsQ} =  this.props 
        const  {authedUser ,  submit ,  direction } = this.state
        
        const id =  direction.split('/')[2]?  direction.split('/')[2] :  undefined;  
        
        if(submit) {
            if (typeof(id)!=="undefined") {
                return <Redirect to={`${direction}/Error`}></Redirect>
            }
            if (typeof(id)!=="undefined" && idsQ.includes(id.trim())===true) {
                return <Redirect to={`${direction}/Error`}></Redirect>
            }
            return <Redirect to={direction}></Redirect>            
        }
        
        return (
            <Fragment>
                <div className="login-box">
                        <div className="login-header">
                       { authedUser? <h4 className="login-text">login to user {authedUser}</h4> :  
                                <h4 className="login-text">login please select a user</h4>}
                            </div> 
                    <div  alt="image" className="center">
                        <img src={Login_img} alt="Login" />
                    </div>
                     <div className="separator"></div>
                    <form action="" onSubmit={this.login}>
                    <select  value={this.state.authedUser} onChange={this.handleChange} className="form-select">
                        <option >-- select user form this menue --</option>
                    {ids.map((id)=>(
                            <option  key={id} value={id}>
                                {users[id].name}</option>
                    ))}
                      </select>
                      <div className="separator"></div>
                        <button type="submit" className="btn-login" >Sign In</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}
function mapStateToProps({users , questions}){
    let idsQ=  Object.keys(questions).sort((a, b) =>questions[b].timestamp -  questions[a].timestamp); 
    return {
        users, 
        ids :  Object.keys(users)  ,
        idsQ 
    }
}

export default withRouter(connect(mapStateToProps)(Login))
