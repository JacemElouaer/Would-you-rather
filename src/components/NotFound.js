import React   ,  { Component , Fragment } from 'react'
import {Redirect} from  "react-router-dom"
import {connect} from "react-redux"

class  NotFound  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            direction:"/login", 
            next:  false,
            
        }
    }
    login =  (e)=>{
        e.preventDefault();
        this.setState({
            next: true
        })
    }
    componentDidMount() {
        this.props.location.state?
        this.setState({
            direction:this.props.location.state.target
        }):  
        console.log("no direction found")
    }
    render() {
        const {next,direction} =  this.state
        const {authedUser} =  this.props
    return (
        <Fragment>
            {next===false?
            <div className="row justify-content-center">
    <div className="col-md-12 col-sm-12">
    <div className="card shadow-lg border-0 rounded-lg mt-5 mx-auto" style={{width: "30rem"}}>
            <h3 className="card-header display-1 text-muted text-center">
                404
            </h3>

            { authedUser['authedUser'] ===""?
            <span className="card-subtitle mb-2 text-muted text-center">
                login pleaze
            </span>:
            <span className="card-subtitle mb-2 text-muted text-center">
            Page Could Not Be Found  Error 
        </span>
            }

            <div className="card-body mx-auto">
                   { authedUser['authedUser'] ===""?            
                <button type="button"
                className="btn btn-sm btn-info text-white" onClick={this.login}>Login </button>:
                <a href="/"><button type="button"
                className="btn btn-sm btn-info text-white" >Go Home</button></a>
                }
            </div>
        </div>
    </div>
</div>: 
    <Redirect to ={{pathname :"/login", state:{target:direction }}}></Redirect>
}
        </Fragment>
    )
}
}
function mapStateToProps({authedUser})
{ return {
    authedUser
}}
export default connect(mapStateToProps)(NotFound)
