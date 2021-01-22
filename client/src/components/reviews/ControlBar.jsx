import React from 'react';

class ControlBar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="control_bar_reviews_count">
          1-6 of 3201 Reviews
        </div>
        <div className="sort_by_dropdown_container">
          <span>Sort By:</span>
          <select className="dropdown">
            <option>Most Relevant</option>
            <option>Most Helpful</option>
            <option>Highest to Lowest Rating</option>
            <option>Most Recent</option>
          </select>
        </div>
      </div>
    )
  }
}


export default ControlBar;