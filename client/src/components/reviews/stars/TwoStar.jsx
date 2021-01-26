import React from 'react';
import FilledStar from './FilledStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const TwoStar = () => {
  return (
    <span>
      <FilledStar />
      <FilledStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
    </span>
  )
}

export default TwoStar;