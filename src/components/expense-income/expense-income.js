import React, {useContext} from 'react';
import TrackerContext from '../context/tracker-context';
import './expense-income.css';

const Expense = () => {
  const trackerContext = useContext(TrackerContext);
  const {transactions} = trackerContext;

  return (
    <div className='inc-exp-container'>
      <div className='income'>
        <h4>INCOME</h4>
        <p className='money plus'>+${transactions.income}</p>
      </div>
      <div className='expenses'>
        <h4>EXPENSE</h4>
        <p className='money minus'>-${transactions.expenses}</p>
      </div>
    </div>
  );
};

export default Expense;
