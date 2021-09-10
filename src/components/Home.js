import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questions from './Questions'


export class Home extends Component {
    render() {
        
        return (
            <div>     
                <Questions/>
            </div>
        )
    }
}
export default connect()(Home)
