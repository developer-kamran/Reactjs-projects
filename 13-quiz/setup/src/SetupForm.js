import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>Setup Quiz</h2>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'> Number Of Questions</label>
            <input
              type='text'
              name='amount'
              id='amount'
              className='form-input'
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className='form-control'>
            <label htmlFor='category'>Category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sports'>Sports</option>
              <option value='history'>History</option>
              <option value='politics'>Politics</option>
            </select>
          </div>
          {/* difficulty */}
          <div className='form-control'>
            <label htmlFor='difficulty'>Select difficulty Level</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='difficulty'>difficulty</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              Can't Generate Questions,Please Try Different Options
            </p>
          )}
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
