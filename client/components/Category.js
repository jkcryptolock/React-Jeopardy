import React from 'react';
import { categories } from '../../testdata';
import PropTypes from 'prop-types';
import Clue from './Clue';


const Category = (props) => {
  console.log(props)
  return (
    <div className='clueValue'> 
      {props.category.clues.map(clue =>

      <Clue clue={clue} />)}</div>
  )

};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
