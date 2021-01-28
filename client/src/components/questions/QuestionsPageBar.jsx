import React from 'react';

const QuestionsPageBar = (props) => {
  let { questions, nextPage, previousPage, questionNumbers } = props
  return (
    <div className="questions-page-bar-container">
      <div className="questions-current-number-text">
        {questionNumbers[0]}-{questionNumbers[1]} of {questions.length} Questions
      </div>
      <div className="questions-flip-page-buttons-container">
        <button className="questions-previous-page-button" onClick={previousPage}>   ◄   </button>
        <button className="questions-next-page-button" onClick={nextPage}>   ►   </button>
      </div>
    </div>
  )
}

export default QuestionsPageBar;