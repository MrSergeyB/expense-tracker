import React, {useContext} from 'react';
import TrackerContext from '../context/tracker-context';
import './history.css';

const History = () => {
  const trackerContext = useContext(TrackerContext);
  const {transactions, removeTransaction} = trackerContext;

  const handleClick = (id, amount) => {
    removeTransaction(id, amount);
  };

  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        {transactions.list.length ? (
          transactions.list.map(t => {
            return +t.amount < 0 ? (
              <li key={t.id} className='minus'>
                <button
                  className='delete-btn'
                  type='text'
                  onClick={() => handleClick(t.id, t.amount)}
                >
                  x
                </button>
                <span>{t.date} </span>
                {t.explanation} <span>${t.amount}</span>
              </li>
            ) : (
              <li key={t.id} className='plus'>
                <button
                  className='delete-btn'
                  type='text'
                  onClick={() => handleClick(t.id, t.amount)}
                >
                  x
                </button>
                <span>{t.date} </span>
                {t.explanation} <span>${t.amount}</span>
              </li>
            );
          })
        ) : (
          <p>No transaction history</p>
        )}
      </ul>
    </div>
  );
};

export default History;
