import React, { Component } from 'react';
import { categories } from '../../testdata';
import PropTypes from 'prop-types';
import App from './App';

export default class Response extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userResponse: ''
    }
    this.recordResponse = this.recordResponse.bind(this);
  }

  recordResponse(newText) {
    this.setState({ userResponse: newText });
  }

  submitResponse(event) {
    if (event.key === 'Enter') {
      var answer = document.getElementById('responseText').value
      this.recordResponse(answer);
      // console.log(answer)
    }

    
    // this function should fire when the user fills the response and hits 'enter'
      // Is the user response correct? 
      // yes/no? What should happen?
  }

  render(){
    return (
      <div id={'response'} data-testid="response">
        <input
          id='responseText'
          type='text'
          placeholder='Answers go here!'
          // handle data change

          // handle when 'enter' is hit
          onKeyPress={this.submitResponse.bind(this)}
        >
        </input>
      </div>
    )
  }
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}