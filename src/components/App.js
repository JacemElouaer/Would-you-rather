import { connect } from 'react-redux' 
import React , {Component , Fragment} from 'react'
import {BrowserRouter  as Router ,  Route}  from 'react-router-dom'
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

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return(
      <Router>
        <Fragment>
        <LoadingBar/>
          <Nav/>
          <div className="body">
                <Route path='/'  exact component={Home}/>              
                <Route path='/questions/:id/:questionType' component={AnswerQuestion}/>
                <Route path='/login' exact component={Login}/>
                <Route path ='/leaderboard' component={LeaderBoard}/> 
                <Route path='/add' component={NewQuestion}/> 
                <Route path="/NotFound" component={NotFound}/> 
          </div>
        </Fragment> 
        </Router>
    )
  }
}

export default withRouter(connect()(App));
