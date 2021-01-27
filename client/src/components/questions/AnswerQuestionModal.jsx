import React from 'react';

class AnswerQuestionModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }


  render() {

    let { currentQuestion } = this.props;

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
                <div className="modal-response-user-and-timestamp-container">
                  <span className="modal-response-user-text">
                    {currentQuestion.response[0].user}
                  </span>
                  <span className="modal-response-timestamp-text">
                    · {currentQuestion.response[0].createdAt} days ago
                  </span>
                </div>
                <div className="modal-response-description">
                  {currentQuestion.response[0].description}
                </div>
                <div className="modal-response-helpfulness-container">
                  <span className="modal-response-helpful-text">Helpful?</span>
                  <span className="modal-helpful-vote-yes-container">
                    <button className="modal-vote-yes-button">Yes · {currentQuestion.response[0].yes}</button>
                  </span>
                  <span className="modal-helpful-vote-no-container">
                    <button className="modal-vote-no-button">No · {currentQuestion.response[0].no}</button>
                  </span>
                  <span className="modal-helpful-vote-report-container">
                    <button className="modal-vote-report-button">{currentQuestion.response[0].report}</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-bottom-half-container">
            <div className="required-fields-text">Required fields are marked with *</div>
            <div className="response-submission-container">
              <div className="answer-text">Answer*</div>
              <div className="answer-input-field-container">
                <textarea className="answer-input-field"></textarea>
              </div>
            </div>
            <div className="submission-location-email-container">
              <span className="submission-location-container">
                <div className="submission-location-text">Location</div>
                <input className="location-input-field"></input>
              </span>
              <span className="submission-email-container">
                <div className="submission-email-text">Email</div>
                <input className="email-input-field"></input>
              </span>
            </div>
            <div className="checkbox-terms-postanswer-container">
              <div className="checkbox-and-terms-container">
                <input type="checkbox" className="checkbox-field"></input>
                <span className="terms-text">I agree to the terms & conditions</span>
              </div>
              <div className="receive-emails-warning-text">You may receive emails regarding this submission. Any emails will include the ability to opt-out of future communications.</div>
              <div className="post-answer-button-container">
                <button className="post-answer-button">post answer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnswerQuestionModal;