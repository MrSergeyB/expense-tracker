import React, {useState, useEffect} from 'react';
import TrackerContext from './tracker-context';
import {v1 as uuidv1} from 'uuid';

const TrackerState = props => {
  const inititalState = JSON.parse(localStorage.getItem('transactions')) || {
    balance: 0,
    income: 0,
    expenses: 0,
    list: []
  };

  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  let newdate = year + '.' + month + '.' + day;

  const [transactions, setTransaction] = useState(inititalState);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (am, expl) => {
    let amount = +am;

    if (amount < 0) {
      setTransaction({
        ...transactions,
        balance: transactions.balance + amount,
        expenses: transactions.expenses - amount,
        list: [
          ...transactions.list,
          {
            id: uuidv1(),
            explanation: expl,
            date: newdate,
            amount: amount
          }
        ]
      });
    } else {
      setTransaction({
        ...transactions,
        balance: transactions.balance + amount,
        income: transactions.income + amount,
        list: [
          ...transactions.list,
          {
            id: uuidv1(),
            explanation: expl,
            date: newdate,
            amount: amount
          }
        ]
      });
    }
  };

  const removeTransaction = (id, am) => {
    let amount = +am;

    let filteredArray = transactions.list.filter(t => {
      return t.id !== id;
    });

    if (amount < 0) {
      setTransaction({
        ...transactions,
        balance: transactions.balance - amount,
        expenses: transactions.expenses + amount,
        list: [...filteredArray]
      });
    } else {
      setTransaction({
        ...transactions,
        balance: transactions.balance - amount,
        income: transactions.income - amount,
        list: [...filteredArray]
      });
    }
  };

  const clearAll = () => {
    localStorage.clear();

    setTransaction({
      balance: 0,
      income: 0,
      expenses: 0,
      list: []
    });
  };

  return (
    <TrackerContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
        clearAll
      }}
    >
      {props.children}
    </TrackerContext.Provider>
  );
};

export default TrackerState;

// 1.Save to local storage
//3.Style tracket that scrool shows up
