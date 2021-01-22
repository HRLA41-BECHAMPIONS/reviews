import React from 'react';
import axios from 'axios';

class ReviewInstance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.voteYes = this.voteYes.bind(this);
    this.voteNo = this.voteNo.bind(this);
    this.reportReview = this.reportReview.bind(this);
  }

  voteYes() {
    let { eachReview } = this.props;
    axios.put(`/bechampions/products/${eachReview.productId}/reviews/${eachReview._id}/yes`)
      .then(() => {
        this.props.getReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  voteNo() {
    let { eachReview } = this.props;
    axios.put(`/bechampions/products/${eachReview.productId}/reviews/${eachReview._id}/no`)
      .then(() => {
        this.props.getReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  reportReview() {
    let { eachReview } = this.props;
    axios.put(`/bechampions/products/${eachReview.productId}/reviews/${eachReview._id}/reported`)
      .then(() => {
        this.props.getReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let { eachReview } = this.props;
    return (
      <div className="review_instance_main_container">
        <div className="review_instance_left_container">
          <div className="review_instance_stars_user_timestamp_container">
            <span>★★★★★</span>
            <span className="review_instance_user">{eachReview.user}</span>
            <span className="review_instance_timestamp"> · {eachReview.createdAt}</span>
          </div>
          <div className="review_title_container">
            {eachReview.title}
          </div>
          <div className="review_description_container">
            {eachReview.description}
          </div>
          <div className="review_instance_helpfulness_container">
            Helpful?
            <button onClick={this.voteYes}>Yes · {eachReview.yes}</button>
            <button onClick={this.voteNo}>No · {eachReview.no}</button>
            <button onClick={this.reportReview}>{eachReview.report}</button>
          </div>
        </div>
        <div className="review_instance_right_container">
          <div className="verified_purchaser_container">
            verified purchaser
          </div>
          <div className="review_quality_container">
            <div className="quality_text">
              Quality
            </div>
            <div className="quality_rating_bar">
              Bar
            </div>
            <div className="quality_rating_poor_excellent">
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </div>
          <div className="review_comfort_level_container">
            comfort level
          </div>
          <div className="review_fit_container">
            fit
          </div>
        </div>
      </div>
    )
  }


}

export default ReviewInstance;