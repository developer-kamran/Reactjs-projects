import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useGlobalContext();
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: new Date().getTime().toString(),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text'
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive + income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
            required
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};
