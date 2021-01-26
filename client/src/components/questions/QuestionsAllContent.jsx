import React from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList.jsx';
import QuestionsPageBar from './QuestionsPageBar.jsx';

class QuestionsAllContent extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      start: 0,
      end: 10
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.getResponses = this.getResponses.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
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

  nextPage() {
    this.setState((state) => ({
      start: state.start + 10,
      end: state.end + 10
    }), () => {
      console.log(this.state)
    })
  }

  previousPage() {
    this.setState((state) => ({
      start: state.start - 10,
      end: state.end - 10
    }), () => {
      console.log(this.state)
    })
  }

  render() {
    let { questions, start, end} = this.state;
    let displayQuestions = questions.slice(start, end);

    return (
      <div className="questions-all-content-container">
        <div className="ask-question-button-container">
          <button className="ask-question-button">ASK A PRODUCT QUESTION</button>
        </div>
        <QuestionsList questions={displayQuestions}/>
        <QuestionsPageBar questions={this.state.questions} nextPage={this.nextPage} previousPage={this.previousPage}/>
      </div>
    )
  }
}

export default QuestionsAllContent;