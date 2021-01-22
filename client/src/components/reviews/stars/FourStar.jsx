import React from 'react';
import FilledStar from './FilledStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const FourStar = () => {
  return (
    <div>
      <FilledStar />
      <FilledStar />
      <FilledStar />
      <FilledStar />
      <EmptyStar />
    </div>
  )
}

export default FourStar;