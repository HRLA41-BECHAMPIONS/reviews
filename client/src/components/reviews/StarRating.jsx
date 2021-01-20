import React from 'react';
import StarInstance from './StarInstance.jsx';

const StarsRating = () => {
  return (
    <div role="group" className="stars_and_average_star_rating_container">
      <span>
        <StarInstance />
        <StarInstance />
        <StarInstance />
        <StarInstance />
        <StarInstance />
      </span>
      <div id="average_star_rating">
        4.6 STARS
      </div>
    </div>
  )
}


export default StarsRating;