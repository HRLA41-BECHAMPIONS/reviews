import React from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList.jsx';

class QuestionsAllContent extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      responses: []
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.getResponses = this.getResponses.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios.get('/bechampions/products/1/questions/')
      .then((response) => {
        this.setState({
          questions: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getResponses() {
    axios.get()
      .then()
      .catch()
  }

  render() {
    return (
      <div className="questions-all-content-container">
        <div className="ask-question-button-container">
          <button className="ask-question-button">ASK A PRODUCT QUESTION</button>
        </div>
        <QuestionsList questions={this.state.questions}/>
      </div>
    )
  }
}

export default QuestionsAllContent;