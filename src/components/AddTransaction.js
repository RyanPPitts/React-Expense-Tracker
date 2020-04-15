import React, { useState } from 'react';

export const AddTransaction = () => {
  // create piece of state - react hooks using useState
  const [text, setText] = useState(''); // Whatever you want in the default setting is in the () in this case its an empty array
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            // user types in text for transaction title - connect cons to input
            value={text}
            // whenever we type into the input we need to update the state
            //  call function with e.target.value being the information entered by user
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            // amount entered by user
            value={amount}
            // onChange to change the state of the setAmount variable
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
