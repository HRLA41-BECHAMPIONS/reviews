import React from 'react';
import QuestionInstance from './QuestionInstance.jsx';

const QuestionsList = (props) => {
  let { questions } = props;
  return (
    <div className="questions-list-container">
      {questions.map((eachQuestion) => {
        return (
        <QuestionInstance eachQuestion={eachQuestion}/>
        )
      })}
    </div>
  )
}

export default QuestionsList;