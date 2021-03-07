import React from 'react';

const ReviewsTab = (props) => {
  return (
    <div className="reviews-tab-container" onClick={props.toggleReviews} >
      <a className="reviews-tab">REVIEWS</a>
    </div>
  )
}


export default ReviewsTab;