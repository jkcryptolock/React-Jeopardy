import React from 'react';
import { categories } from '../../testdata';
import PropTypes from 'prop-types';
import Categories from './Categories';

const Gameboard = (props) => {

  console.log(categories[0].clues)

  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
      <Categories categories={props.categories} />
  

        {/* was a question clicked?  */}
        {/* Yes? Show clue */}
        {/* No? Show Categories */}
        {/* {props.categories.map(category => 
        } /> */}
    </div>
  )
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
