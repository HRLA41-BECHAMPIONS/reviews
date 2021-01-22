import React from 'react';
import FilledStar from './FilledStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const ThreeStar = () => {
  return (
    <div>
      <FilledStar />
      <FilledStar />
      <FilledStar />
      <EmptyStar />
      <EmptyStar />
    </div>
  )
}

export default ThreeStar;