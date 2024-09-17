import React from 'react';
import { Transaction } from './Transaction';

import { useGlobalContext } from '../context/context';

export const TransactionList = () => {
  const { transactions } = useGlobalContext();

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </>
  );
};
