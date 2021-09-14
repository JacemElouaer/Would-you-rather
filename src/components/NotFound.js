import React   ,  { Component , Fragment } from 'react'
import {Redirect} from  "react-router-dom"
import {connect} from "react-redux"

class  NotFound  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            direction:"/login", 
        }
    }
    componentDidMount() {
        this.props.location.state?
        this.setState({
            direction:this.props.location.state.target
        }):  
        console.log("no direction found")
    }
    render() {
    return (
        <Fragment>
            
    <Redirect to ={{pathname :"/login", state:{target:this.props.location.state.target} }}></Redirect>

        </Fragment>
            )
        }
    }
function mapStateToProps({authedUser}){ 
    return {
    authedUser
}}
export default connect(mapStateToProps)(NotFound)
