import React from 'react';
import { categories } from '../../testdata';
import PropTypes from 'prop-types';
import Category from './Category';

const Categories = (props) => {
  return (
      <div id='categories' data-testid="categoryList">
      {props.categories.map(category => 
      <Category category={category}/>)}</div> 
      
  )
};


Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;
