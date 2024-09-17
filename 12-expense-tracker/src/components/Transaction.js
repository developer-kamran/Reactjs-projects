import React from 'react';
import { useGlobalContext } from '../context/context';

export const Transaction = ({ amount, id, text }) => {
  const sign = amount < 0 ? '-' : '+';
  const { deleteTransaction } = useGlobalContext();

  return (
    <>
      <li className={amount < 0 ? 'minus' : 'plus'}>
        {text}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className='delete-btn' onClick={() => deleteTransaction(id)}>
          x
        </button>
      </li>
    </>
  );
};
