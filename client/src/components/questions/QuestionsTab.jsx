import React from 'react';

const QuestionsTab = (props) => {
  return (
    <div className="questions-tab-container" onClick={props.toggleQuestions}>
      <a className="questions-tab">QUESTIONS</a>
    </div>
  )
}

export default QuestionsTab;