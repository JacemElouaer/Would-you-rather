import React, { Component  , Fragment } from 'react'
import { connect } from 'react-redux'
import Questions from './Questions'
import {Redirect} from "react-router-dom"



export class Home extends Component {
    
    render() {
        const {authedUser}  =this.props
        return (
            <Fragment>
            {  authedUser["authedUser"]===""?
            <Redirect to={{ pathname:'/login', 
            state : {target:"/"} }}></Redirect>:
            <div>    
                <Questions/>
            </div>
            
        }
        </Fragment>
        )
    }
}
function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(Home)
