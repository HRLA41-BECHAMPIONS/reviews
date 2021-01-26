import React from 'react';

const ReviewsPageBar = (props) => {

  return (
    <div className="reviews-page-bar-container">
      <div className="reviews-current-number-text">
        1-10 of {props.reviews.length} Reviews
      </div>
      <div className="reviews-flip-page-buttons-container">
        <button className="reviews-previous-page-button" onClick={props.previousPage}>   ◄   </button>
        <button className="reviews-next-page-button" onClick={props.nextPage}>   ►   </button>
      </div>
    </div>
  )
}

export default ReviewsPageBar;