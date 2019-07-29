import React from 'react';
import { categories } from '../../testdata';
import PropTypes from 'prop-types';
import Category from './Category';

const Categories = (props) => {
  return (
      props.categories.map(category =>
      <div className='category' data-testid="categoryList">
      <Category title={category.title} currentQuestion={props.currentQuestion} answeredQuestions={props.answeredQuestions}/>
      </div>
      ))};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;
