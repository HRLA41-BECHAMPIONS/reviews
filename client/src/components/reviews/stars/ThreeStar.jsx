import React from 'react';
import FilledStar from './FilledStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const ThreeStar = () => {
  return (
    <span>
      <FilledStar />
      <FilledStar />
      <FilledStar />
      <EmptyStar />
      <EmptyStar />
    </span>
  )
}

export default ThreeStar;