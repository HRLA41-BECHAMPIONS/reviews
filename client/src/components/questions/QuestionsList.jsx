import React from 'react';
import QuestionInstance from './QuestionInstance.jsx';

const QuestionsList = (props) => {
  let { questions, displayModal } = props;
  return (
    <div className="questions-list-container">
      {questions.map((eachQuestion) => {
        return (
        <QuestionInstance eachQuestion={eachQuestion} displayModal={displayModal}/>
        )
      })}
    </div>
  )
}

export default QuestionsList;