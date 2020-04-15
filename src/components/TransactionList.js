import React, { useContext } from 'react';
import { GlobalContext, GlobalProvider } from '../context/GlobalState';
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
          <li className="minus">
            {transaction.text}
            <span>-$400</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};
