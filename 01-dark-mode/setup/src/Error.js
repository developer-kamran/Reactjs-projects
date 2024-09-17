import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div
        className='container'
        style={{
          marginTop: '10rem',
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
          }}
        >
          404
        </h1>
        <h2
          style={{
            marginBottom: '2.75rem',
          }}
        >
          Page Not Found
        </h2>
        <Link
          to='/'
          className='btn'
          style={{
            border: '1px solid #444',
            background: '#fff',
            color: '#222',
            padding: '15px',
          }}
        >
          Go back To Home
        </Link>
      </div>
    </>
  );
};

export default Error;
