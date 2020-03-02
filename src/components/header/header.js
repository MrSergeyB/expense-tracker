import React, {Fragment, useContext} from 'react';
import TrackerContext from '../context/tracker-context';

import './header.css';

const Header = () => {
  const trackerContext = useContext(TrackerContext);
  const {transactions} = trackerContext;
  return (
    <Fragment>
      <div>
        <h2 className='tracker-header'>Expense tracker</h2>
      </div>
      <div>
        <h4>Your balance</h4>
        <h1>${transactions.balance}</h1>
      </div>
    </Fragment>
  );
};

export default Header;
