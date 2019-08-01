import React from 'react';
import { categories } from '../../testdata';
import PropTypes from 'prop-types';
import Clue from './Clue';


const Category = (props) => {
  return (
    <div className="category">
      <div className="categoryTitle">{props.category.title.toUpperCase()}</div>
      {props.category.clues.map(clueObject => {
        if (props.answeredQuestions.includes(clueObject.id)) {
          return (
            <Clue 
            clueObject={clueObject}
            selectQuestion={props.selectQuestion}
            answered={true}/>)
        } else {
          return (
            <Clue 
            clueObject={clueObject}
            selectQuestion={props.selectQuestion}
            answered={false}/>)
          }
      })
    }
    </div>
  )
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
