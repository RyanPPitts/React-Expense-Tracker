import React from 'react';

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    //   interesting : if the transaction amount is under 0 apply the minus class.  If over 0 apply the plus class
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};
