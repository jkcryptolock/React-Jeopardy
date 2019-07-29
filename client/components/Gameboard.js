import React from 'react';
import { categories } from '../../testdata';
import PropTypes from 'prop-types';
import Categories from './Categories';

const Gameboard = (props) => {

  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
    <div id="categories"><Categories categories={props.categories} currentQuestion={props.currentQuestion} answeredQuestions={props.answeredQuestions}/></div>
 

      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
      {/* {props.categories.map(category => 
      } /> */}
    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
