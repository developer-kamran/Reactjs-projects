import React, { useState, useEffect } from 'react';
// import rgbToHex from './utils';
// const hex = rgbToHex(...rgb);

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  // const bcg = rgb.join();
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: hexValue }}
    >
      <div className='copy-flex'>
        <p className='percent-value'>{weight}%</p>
        <button
          type='text'
          onClick={() => {
            navigator.clipboard.writeText(hexValue);
            setAlert(true);
          }}
          className='copy-btn'
        >
          {alert ? (
            <p className={`alert ${index < 10 && 'color-dark'}`}>
              Copied To Clipboard
            </p>
          ) : (
            <p className={`alert ${index < 10 && 'color-dark'}`}>Copy</p>
          )}
        </button>
      </div>
      <p className='color-value'>{hexValue}</p>
    </article>
  );
};

export default SingleColor;
