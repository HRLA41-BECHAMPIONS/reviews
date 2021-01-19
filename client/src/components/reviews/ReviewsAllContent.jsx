import React from 'react';
import StarsRating from './StarRating.jsx';
import RatingDistribution from './RatingDistribution.jsx';

const ReviewsAllContent = () => {
  return (
    <div className="reviews_all_content">
      <div className="review_highlights_container">
        <div className="left_ratings_container">
          <StarsRating />
          <RatingDistribution />
        </div>
      </div>
    </div>
  )
}

export default ReviewsAllContent;