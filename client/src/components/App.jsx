import React from 'react';
import ReviewsAllContent from './reviews/ReviewsAllContent.jsx';
import ReviewsTab from './reviews/ReviewsTab.jsx';
import QuestionsTab from './questions/QuestionsTab.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };

  }

  render() {
    return (
      <div className="product-data-items-tablist">
        <ReviewsTab />
        <QuestionsTab />
        <ReviewsAllContent />
      </div>
    );
  }
}

export default App;