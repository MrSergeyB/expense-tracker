import React, {Fragment, useContext} from 'react';
import TrackerContext from '../context/tracker-context';

import './header.css';

const Header = () => {
  const trackerContext = useContext(TrackerContext);
  const {transactions} = trackerContext;
  return (
    <Fragment>
      <div className='header'>
        <h2 className='tracker-header'>Expense tracker</h2>

        <div>
          <h4 className='balance'>Your balance</h4>
          <h1 className='balance-amount'>${transactions.balance}</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
