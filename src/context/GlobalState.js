import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State - single object or global object
const initialState = {
  transactions: [
    // here are the dummy transactions
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Xbox', amount: 300 },
  ],
};

// Create global context
// bringing this into other files and components
// initial state gets pasted
//  In order for other components to our store or global state we need to have a provider component

export const GlobalContext = createContext(initialState);

// Provider component - wrapping all the existing components (balance, income expense, balance,addtransaction) into the provider
// export so we can bring into the App.js file
// provider provides any state to the components its wrapped around
// all components will become children prop
// whenever we want to call reducer we have to have the dispatch called
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
