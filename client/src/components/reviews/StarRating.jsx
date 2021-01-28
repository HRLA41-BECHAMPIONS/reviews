import React from 'react';
import FullStar from './StarInstance.jsx';
import HalfStar from './averageStars/HalfStar.jsx';
import QuarterStar from './averageStars/QuarterStar.jsx';
import ThirdStar from './averageStars/ThirdStar.jsx';
import EmptyStar from './averageStars/EmptyStar.jsx';

const StarsRating = (props) => {
  let { reviews } = props;
  let fiveStarCount = 0;
  let fourStarCount = 0;
  let threeStarCount = 0;
  let twoStarCount = 0;
  let oneStarCount = 0;
  for (var i = 0; i < reviews.length; i++) {
    let eachReview = reviews[i];
    if (eachReview.stars === 5) {
      fiveStarCount += 1;
    } else if (eachReview.stars === 4) {
      fourStarCount += 1;
    } else if (eachReview.stars === 3) {
      threeStarCount += 1;
    } else if (eachReview.stars === 2) {
      twoStarCount += 1;
    } else {
      oneStarCount += 1;
    }
  }

  let weightedAverage = Number((((fiveStarCount * 5) + (fourStarCount * 4) + (threeStarCount * 3) + (twoStarCount * 2) + (oneStarCount))/(reviews.length)).toFixed(1))

  let stars;
  if (weightedAverage > 1 && weightedAverage < 1.4) {
    stars = <span><FullStar /><QuarterStar /><EmptyStar /><EmptyStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 1.4 && weightedAverage < 1.7) {
    stars = <span><FullStar /><HalfStar /><EmptyStar /><EmptyStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 1.7 && weightedAverage < 1.9) {
    stars = <span><FullStar /><ThirdStar /><EmptyStar /><EmptyStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 1.9 && weightedAverage < 2.1) {
    stars = <span><FullStar /><FullStar /><EmptyStar /><EmptyStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 2.1 && weightedAverage < 2.4) {
    stars = <span><FullStar /><FullStar /><QuarterStar /><EmptyStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 2.4 && weightedAverage < 2.7) {
    stars = <span><FullStar /><FullStar /><HalfStar /><EmptyStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 2.7 && weightedAverage < 2.9) {
    stars = <span><FullStar /><FullStar /><ThirdStar /><EmptyStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 2.9 && weightedAverage < 3.2) {
    stars = <span><FullStar /><FullStar /><FullStar /><EmptyStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 3.2 && weightedAverage < 3.4) {
    stars = <span><FullStar /><FullStar /><FullStar /><QuarterStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 3.4 && weightedAverage < 3.7) {
    stars = <span><FullStar /><FullStar /><FullStar /><HalfStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 3.7 && weightedAverage < 3.9) {
    stars = <span><FullStar /><FullStar /><FullStar /><ThirdStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 3.9 && weightedAverage < 4.2) {
    stars = <span><FullStar /><FullStar /><FullStar /><FullStar /><EmptyStar /></span>;
  } else if (weightedAverage >= 4.2 && weightedAverage < 4.4) {
    stars = <span><FullStar /><FullStar /><FullStar /><FullStar /><QuarterStar /></span>;
  } else if (weightedAverage >= 4.4 && weightedAverage < 4.6) {
    stars = <span><FullStar /><FullStar /><FullStar /><FullStar /><HalfStar /></span>;
  } else if (weightedAverage >= 4.6 && weightedAverage < 4.9) {
    stars = <span><FullStar /><FullStar /><FullStar /><FullStar /><ThirdStar /></span>;
  } else if (weightedAverage >= 4.9) {
    stars = <span><FullStar /><FullStar /><FullStar /><FullStar /><FullStar /></span>;
  }
  return (
    <div role="group" className="stars_and_average_star_rating_container">
        {stars}
      <div id="average_star_rating">
        {weightedAverage} STARS
      </div>
    </div>
  )
}


export default StarsRating;