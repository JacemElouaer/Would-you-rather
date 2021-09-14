import React   ,  { Component , Fragment } from 'react'
import {Redirect ,  Link} from "react-router-dom"
import {connect} from  "react-redux"

class  NotFound  extends Component {
   

    
    render() {
        const  {authedUser} =  this.props
        console.log(this.props.location.pathname)
        
        
    return (
        <Fragment> 
            { authedUser['authedUser'] ===""?            
        <Redirect to={{pathname:"/NotFound" , state:{ target :this.props.location.pathname} }}></Redirect>:
        
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
            Page Could Not Be Found 
            <br/>
            {this.props.location.pathname }
        </span>
            }

            <div className="card-body mx-auto">
                  
                <Link to="/"><button type="button"
                className="btn btn-sm btn-info text-white">Go Home </button></Link>
                
            </div>
        </div>
    </div>
</div>}
        </Fragment>
    )
}
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(NotFound)
