import React from 'react';
import axios from 'axios';

class QuestionInstance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    let { eachQuestion, displayModal } = this.props;
    return (
      <div className="question-instance-container">
        <div className="question-instance-text">
          {eachQuestion.description}
        </div>
        <div className="question-instance-answer-question-button-container">
          <button className="answer-this-question-button" onClick={() => {displayModal(eachQuestion)}}>answer this question</button>
        </div>
        <div className="question-instance-response-container">
          {eachQuestion.response[0].description}
        </div>
      </div>
    )
  }
}

export default QuestionInstance;