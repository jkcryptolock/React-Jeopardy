import React from 'react';
import { categories } from '../../testdata';
import PropTypes from 'prop-types';
import App from './App';

const Clue = (props) => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered

  var onClueItemClick = (event) => {
      return (
        // console.log(props.selectQuestion)
        props.selectQuestion(props.clueObject)
        )

  }

  return (
    <div className='clueValue' onClick={onClueItemClick} answered='false'>{props.clueObject.value} </div> 
  )
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
