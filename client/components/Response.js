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

  recordResponse(event) {
    this.setState({ userResponse: event.target.value });
  }

  render(){
    return (
      <div id={'response'} data-testid="response">
        <input
          id='responseText'
          type='text'
          placeholder='Answers go here!'
          // handle data change
          value={this.state.userResponse}
          onChange={this.recordResponse}
          // handle when 'enter' is hit
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              this.props.submitResponse(this.state.userResponse);
              this.setState({userResponse: ''});
            }
          }
          }
        >
        </input>
      </div>
    )
  }
}

Response.propTypes = {
  submitResponse: PropTypes.func,
}