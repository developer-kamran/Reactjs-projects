import React from 'react';
import { useGlobalContext } from '../context/context';

export const Balance = () => {
  const { transactions } = useGlobalContext();
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
