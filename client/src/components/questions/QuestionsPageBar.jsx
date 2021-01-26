import React from 'react';

const QuestionsPageBar = (props) => {

  return (
    <div className="questions-page-bar-container">
      <div className="questions-current-number-text">
        1-10 of {props.questions.length} Questions
      </div>
      <div className="questions-flip-page-buttons-container">
        <button className="questions-previous-page-button" onClick={props.previousPage}>   ◄   </button>
        <button className="questions-next-page-button" onClick={props.nextPage}>   ►   </button>
      </div>
    </div>
  )
}

export default QuestionsPageBar;