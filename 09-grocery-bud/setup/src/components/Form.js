import React from 'react';

const form = ({ handleSubmit, setName, isEditing, name }) => {
  return (
    <>
      <h3>grocery bud</h3>
      <form onSubmit={(e) => handleSubmit(e)} className='form-control'>
        <input
          type='text'
          className='grocery'
          placeholder='e.g Eggs'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' className='submit-btn'>
          {isEditing ? 'Edit' : 'Submit'}
        </button>
      </form>
    </>
  );
};

export default form;
