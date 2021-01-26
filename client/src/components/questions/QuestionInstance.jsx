import React from 'react';
import axios from 'axios';

class QuestionInstance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    let { eachQuestion } = this.props;
    return (
      <div className="question-instance-container">
        <div className="question-instance-text">
          {eachQuestion.description}
        </div>
        <div className="question-instance-answer-question-button-container">
          <button className="answer-this-question-button">answer this question</button>
        </div>
      </div>
    )
  }
}

export default QuestionInstance;