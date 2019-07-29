import React from 'react';
import { categories } from '../../testdata';
import PropTypes from 'prop-types';
import Clue from './Clue';


const Category = (props) => {
  console.log(props)
  return (
      // <div>
      <div className='categoryTitle'>
        {props.title}
      </div>
      /* <div className='clueValue' data-testid="categoryList">
        <Clue clueObject={props.clues[0]}/>
      </div>
      </div> */
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
