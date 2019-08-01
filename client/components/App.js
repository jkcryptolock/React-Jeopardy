import React, { Component } from 'react';
import { categories } from '../../testdata';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';
import Response from './Response';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }

  componentWillMount() {
    fetch("http://jservice.io/api/categories?count=100")
    .then(res => res.json())
    .then(
      (result) => {
        // map results
        let newResults = [];
        for (let i = 0; i <100; i+=20){
          let index = Math.floor(Math.random()*20)
          newResults.push(result[index+i])
        }
        newResults.map(category => {
          fetch(`http://jservice.io/api/category?id=${category.id}`)
            .then(res => res.json())
            .then(clues => {
              let newClues = clues.clues.slice(0,5)
              clues.clues = newClues;
              this.setState({ results: this.state.results.concat(clues)});
            })
        })
      })
}

  SelectQuestion(clue) {
    this.setState({currentQuestion: clue});
    console.log(clue.answer)
  }

  submitResponse(response) {
    if (this.state.currentQuestion.answer && this.state.currentQuestion.answer.toLowerCase().includes(response.toLowerCase())) {
      this.setState({
          score: this.state.score + this.state.currentQuestion.value,
          answeredQuestions: this.state.answeredQuestions.concat(this.state.currentQuestion.id),
          currentQuestion: {}
      })
    } else if (this.state.currentQuestion.answer) {
      this.setState({
        score: this.state.score - this.state.currentQuestion.value,
        answeredQuestions: this.state.answeredQuestions.concat(this.state.currentQuestion.id),
        currentQuestion: {}
    })
    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <div id={'app'}>
        <Gameboard 
          currentQuestion={this.state.currentQuestion} 
          answeredQuestions={this.state.answeredQuestions} 
          categories={this.state.results} 
          selectQuestion={this.SelectQuestion.bind(this)} />
        <Scoreboard score={this.state.score}/>
        <Response submitResponse={this.submitResponse.bind(this)}/>
      </div>
    );

  }
}
