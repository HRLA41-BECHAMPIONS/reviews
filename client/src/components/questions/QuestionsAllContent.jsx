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
      currentQuestion: {response: [{user: 'componentDidMountDidNotRunYet'}]},
      showModal: 'none'
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateQuestions = this.updateQuestions.bind(this);
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
      })})
      .catch((err) => {
        console.log(err);
      });
  }

  updateQuestions(questionId) {
    axios.get('/api/bechampions/products/1/questions/')
      .then((response) => {
        let question;
        for (var i = 0; i < response.data.length; i++) {
          let eachQuestion = response.data[i];
          if (eachQuestion._id === questionId) {
            question = eachQuestion;
          }
        }
        this.setState({
          questions: response.data,
          currentQuestion: question
        })
      })
      .catch((err) => {
        console.log(err);
      });
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

  displayModal(specificQuestion) {
    this.setState({
      currentQuestion: specificQuestion,
      showModal: 'block'
    })
  }

  closeModal() {
    this.setState({
      showModal: 'none'
    })
  }

  render() {
    let { questions, start, end, currentQuestion } = this.state;
    let displayQuestions = questions.slice(start, end);

      return (
        <div className="questions-all-content-container">
          <div className="ask-question-button-container">
            <button className="ask-question-button">ASK A PRODUCT QUESTION</button>
          </div>
          <div className="answer-question-modal-background-container" style={{display: this.state.showModal}}>
            <AnswerQuestionModal currentQuestion={currentQuestion} closeModal={this.closeModal} displayModal={this.displayModal} updateQuestions={this.updateQuestions}/>
          </div>
          <QuestionsList questions={displayQuestions} displayModal={this.displayModal}/>
          <QuestionsPageBar questions={this.state.questions} nextPage={this.nextPage} previousPage={this.previousPage} questionNumbers={[start + 1, end]}/>
        </div>
      )
  }
}

export default QuestionsAllContent;