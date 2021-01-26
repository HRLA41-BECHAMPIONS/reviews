import React from 'react';
import FilledStar from './FilledStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const FourStar = () => {
  return (
    <span>
      <FilledStar />
      <FilledStar />
      <FilledStar />
      <FilledStar />
      <EmptyStar />
    </span>
  )
}

export default FourStar;