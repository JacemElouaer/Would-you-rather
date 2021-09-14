import { connect } from 'react-redux' 
import React , {Component , Fragment} from 'react'
import {BrowserRouter  as Router ,Switch ,   Route}  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleInitialData } from '../actions/shared'
import '../index.css'
import '../nav.css'
import Home from './Home'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import {withRouter} from 'react-router-dom'
import AnswerQuestion from './AnswerQuestion';
import LeaderBoard  from './LeaderBoard'; 
import Nav from './Nav'; 
import NewQuestion  from './NewQuestion';     
import NotFound from  './NotFound'; 
import NotFoundPage from  './NotFoundPage'; 


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    this.props.dispatch(handleInitialData())
    this.setState({
      })
  }
  render(){
    const {authedUser} = this.props
    return(
      <Router>
        <Fragment>
          <LoadingBar/>
           <Nav/>
              <div className="body">
               { authedUser["authedUser"]===""?
                <title>login pleaze ! </title>:
                <title>{authedUser["authedUser"]}</title>}
                <Switch>
                    <Route path='/'  exact component={Home}/>              
                    <Route path='/questions/:id' exact component={AnswerQuestion}/>
                    <Route path='/login' exact render={(props)=><Login {...props}/>}/>
                    <Route path ='/leaderboard' exact component={LeaderBoard}/> 
                    <Route path='/add' exact component={NewQuestion}/> 
                    <Route path="/NotFound" exact render={(props)=><NotFound {...props}/>}/> 
                    <Route  component={NotFoundPage}/> 
                </Switch>
              </div>
          </Fragment> 
        </Router>
    )
  }
}
function mapStateToProps({authedUser}){
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(App));
