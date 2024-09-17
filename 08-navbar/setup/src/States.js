import React from 'react';

const States = ({ abbr, name, lat, long, capital }) => {
  return (
    <div className='card card-body mb-4 p-4'>
      <h3>
        <span className='text-danger'>
          {name}({abbr})
        </span>{' '}
        {capital}
      </h3>
      <p>
        <span className='text-primary'>Lat:</span> {lat}{' '}
        <span className='text-primary'>Long:</span>
        {long}
      </p>
    </div>
  );
};

export default States;
