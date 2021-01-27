import React from 'react';

class AnswerQuestionModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }


  render() {

    let { currentQuestion } = this.props;
    console.log(currentQuestion);

    return (
      <div className="answer-question-modal-main-container">
        <div className="post-answer-text">
          Post Answer
        </div>
        <div className="modal-main-content">
          <div className="modal-question-response-container">
            <div className="modal-question-container">
              <div className="modal-question-top-container">
                <div className="modal-question-user-timestamp-description-container">
                  <span className="modal-question-user">{currentQuestion.user}</span>
                  <span className="modal-question-timestamp"> · {currentQuestion.createdAt} days ago</span>
                  <div className="modal-question-description">
                    {currentQuestion.description}
                  </div>
                </div>
                <div className="modal-response-count-container">
                  <span className="modal-question-response-count-text">{currentQuestion.responseCount}</span>
                  <span className="modal-question-response-count-answer-text">answer</span>
                </div>
              </div>
              <div className="modal-response-container">
                {/* {currentQuestion.response[0].user} */}
                response user
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnswerQuestionModal;