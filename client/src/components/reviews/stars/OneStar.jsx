import React from 'react';
import FilledStar from './FilledStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const OneStar = () => {
  return (
    <span>
      <FilledStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
    </span>
  )
}

export default OneStar;