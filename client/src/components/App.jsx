import React from 'react';
import ReviewsAllContent from './reviews/ReviewsAllContent.jsx';
import ReviewsTab from './reviews/ReviewsTab.jsx';
import QuestionsTab from './questions/QuestionsTab.jsx';
import QuestionsAllContent from './questions/QuestionsAllContent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContent: 'reviews'
    };
    this.toggleReviews = this.toggleReviews.bind(this);
    this.toggleQuestions = this.toggleQuestions.bind(this);
  }

  toggleReviews() {
    this.setState({
      currentContent: 'reviews'
    })
  }

  toggleQuestions() {
    this.setState({
      currentContent: 'questions'
    })
  }

  render() {
    let content;
    if (this.state.currentContent === 'reviews') {
      content = <ReviewsAllContent />;
    } else if (this.state.currentContent === 'questions') {
      content = <QuestionsAllContent />
    }

    return (
      <div className="product-data-items-tablist">
        <ReviewsTab toggleReviews={this.toggleReviews}/>
        <QuestionsTab value="questions" toggleQuestions={this.toggleQuestions}/>
        {content}
      </div>
    )
  }
}

export default App;