import React from 'react';
import Header from './components/header';
import ExpenseIncome from './components/expense-income';
import History from './components/history';
import AddNew from './components/add-new';
import TrackerState from './components/context/tracker-provider';

import './App.css';

const App = () => {
  return (
    <TrackerState>
      <div className='wrapper'>
        <div className='tracker-body'>
          <Header />
          <ExpenseIncome />
          <History />
          <AddNew />
        </div>
      </div>
    </TrackerState>
  );
};

export default App;
