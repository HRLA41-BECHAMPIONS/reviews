import React from 'react';
import RightArrow from './RightArrow.jsx';

const SeeAllReviews = () => {
  return (
    <button className="see_all_reviews_button">
      <span>
        SEE ALL REVIEWS
        <RightArrow />
      </span>
    </button>
  )
}

export default SeeAllReviews;