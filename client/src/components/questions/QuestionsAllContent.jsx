import React from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList.jsx';
import QuestionsPageBar from './QuestionsPageBar.jsx';
import AnswerQuestionModal from './AnswerQuestionModal.jsx';

class QuestionsAllContent extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      start: 0,
      end: 10,
      currentQuestion: {},
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
    axios.get('/api/bechampions/products/1/questions/')
      .then((response) => {
        this.setState({
          questions: response.data,
          currentQuestion: response.data[0]
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
        <AnswerQuestionModal currentQuestion={this.state.currentQuestion}/>
        <QuestionsList questions={displayQuestions}/>
        <QuestionsPageBar questions={this.state.questions} nextPage={this.nextPage} previousPage={this.previousPage}/>
      </div>
    )
  }
}

export default QuestionsAllContent;