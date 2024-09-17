import React, { useState, useEffect } from 'react';
import { Data } from './data';
import States from './States';

const Search = () => {
  const [text, setText] = useState('');
  const [html, setHtml] = useState([]);
  const filterData = () => {
    let result = Data.filter((state) => {
      const regex = new RegExp(`^${text}`, 'gi');
      return state.name.match(regex) || state.abbr.match(regex);
    });
    if (text.length === 0) {
      result = [];
    }
    setHtml(result);
  };
  useEffect(() => {
    filterData();
  }, [text]);
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 m-auto  '>
            <h2 className='text-center  '>
              <i className='fas fa-flag-usa'></i> State Capital Lookup
            </h2>
            <input
              type='text'
              className='form-control form-control-lg mt-4'
              placeholder='Enter State Name or Abbreviation...'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div id='match-list'>
              {html.length > 0 &&
                html.map((match, index) => {
                  return <States key={index} {...match} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
