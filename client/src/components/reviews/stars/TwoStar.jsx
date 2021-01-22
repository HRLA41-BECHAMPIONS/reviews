import React from 'react';
import FilledStar from './FilledStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const TwoStar = () => {
  return (
    <div>
      <FilledStar />
      <FilledStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
    </div>
  )
}

export default TwoStar;