import React from 'react';
import axios from 'axios';

import StarsRating from './StarRating.jsx';
import RatingDistribution from './RatingDistribution.jsx';
import Pros from './Pros.jsx';
import Cons from './Cons.jsx';
import StatsRecommendation from './StatsRecommendation.jsx';
import SeeAllReviewsButton from './SeeAllReviews.jsx';
import ControlBar from './ControlBar.jsx';
import ReviewList from './ReviewList.jsx';

class ReviewsAllContent extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
    //bind your stuff!!!
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/bechampions/products/1/reviews/')
      .then((response) => {
        this.setState({
          reviews: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render () {
    return (
      <div className="reviews_all_content">
        <div className="review_highlights_container">
          <div className="left_ratings_container">
            <StarsRating />
            <RatingDistribution />
            <StatsRecommendation />
          </div>
          <div className="pros_and_cons_container">
            <div className="pros_container">
              <Pros />
            </div>
            <div className="cons_container">
              <Cons />
              <SeeAllReviewsButton />
            </div>
          </div>
        </div>
        <div className="reviews_action_bar_container">
            <div className="reviews_action_header">REVIEWS</div>
            <div className="write_review_container">
              <button className="write_review_button">WRITE A REVIEW</button>
            </div>
        </div>
        <div className="filter_control_bar_container">
          <ControlBar />
        </div>
        <ReviewList />
      </div>
    )
  }
}

export default ReviewsAllContent;