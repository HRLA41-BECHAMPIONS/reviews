import React from 'react';

class ControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: ''
    }
    this.selectChange = this.selectChange.bind(this);
  }

  selectChange(event) {
    let { sortMethods } = this.props;
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      let {sortBy} = this.state;
      if (sortBy === 'Most Recent') {
        sortMethods[0]();
      } else if (sortBy === 'Highest to Lowest Rating') {
        sortMethods[1]();
      } else if (sortBy === 'Most Helpful') {
        sortMethods[2]();
      }
    })
  }

  render() {
    return (
      <div>
        <div className="control_bar_reviews_count">
          1-6 of 3201 Reviews
        </div>
        <div className="sort_by_dropdown_container">
          <span>Sort By:</span>
          <select className="dropdown" onChange={this.selectChange} name="sortBy">
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