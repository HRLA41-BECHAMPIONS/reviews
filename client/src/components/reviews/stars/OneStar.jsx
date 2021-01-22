import React from 'react';
import FilledStar from './FilledStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const OneStar = () => {
  return (
    <div>
      <FilledStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
    </div>
  )
}

export default OneStar;