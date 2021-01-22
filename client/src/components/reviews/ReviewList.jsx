import React from 'react';
import ReviewInstance from './ReviewInstance.jsx';

const ReviewList = (props) => {
  return (
    <div className="review_list_container">
      {props.reviews.map((eachReview) => {
        return (
          <ReviewInstance eachReview={eachReview} getReviews={props.getReviews}/>
        )
      })}
    </div>
  )
}


export default ReviewList;