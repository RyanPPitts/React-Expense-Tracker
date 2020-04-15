import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      {/* using react fragment on line 5 and 9 */}
      <h4>Balance</h4>
      <h1>{total}</h1>
    </>
  );
};
