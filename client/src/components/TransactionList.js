import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';
// import GlobalContext so this component can use the global state

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  //   const context = useContext(GlobalContext);
  //   console.log(context.transactions); // pulling the globalstate information for this component

  return (
    <>
      <h3> History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
