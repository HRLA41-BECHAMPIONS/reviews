import React from 'react';

class RatingDistribution extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div role="group" className="rating_distribution_container">
        <div className="rating_distribution_text_number_reviews_container">
          <span id="rating_distribution_text">Rating Distribution</span>
          <span id="number_reviews">(3198 reviews)</span>
        </div>
        <div className="star_rating_bars_container">
          <div className="rating_bar_instance_container">
            <div className="number_star_text">5 star</div>
            <div className="rating_bar_instance"></div>
            <div className="total_number_reviews_for_star_rating">2605</div>
          </div>
        </div>
        <div className="star_rating_bars_container">
          <div className="rating_bar_instance_container">
            <div className="number_star_text">4 star</div>
            <div className="rating_bar_instance"></div>
            <div className="total_number_reviews_for_star_rating">2605</div>
          </div>
        </div>
        <div className="star_rating_bars_container">
          <div className="rating_bar_instance_container">
            <div className="number_star_text">3 star</div>
            <div className="rating_bar_instance"></div>
            <div className="total_number_reviews_for_star_rating">2605</div>
          </div>
        </div>
        <div className="star_rating_bars_container">
          <div className="rating_bar_instance_container">
            <div className="number_star_text">2 star</div>
            <div className="rating_bar_instance"></div>
            <div className="total_number_reviews_for_star_rating">2605</div>
          </div>
        </div>
        <div className="star_rating_bars_container">
          <div className="rating_bar_instance_container">
            <div className="number_star_text">1 star</div>
            <div className="rating_bar_instance"></div>
            <div className="total_number_reviews_for_star_rating">2605</div>
          </div>
        </div>
      </div>
    )
  }
}

export default RatingDistribution;