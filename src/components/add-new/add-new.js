import React, {useState, useContext} from 'react';
import TrackerContext from '../context/tracker-context';
import './add-new.css';

const AddNew = () => {
  const [amount, setAmount] = useState();
  const [explanation, setExplanation] = useState();
  const trackerContext = useContext(TrackerContext);
  const {addTransaction, clearAll} = trackerContext;

  const handleSubmit = e => {
    e.preventDefault();
    addTransaction(amount, explanation);
    setAmount('');
    setExplanation('');
  };

  const handleClearAll = e => {
    e.preventDefault();
    clearAll();
  };

  return (
    <div className='inpu-div'>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit} id='myfrom'>
        <label htmlFor='explanation'>Explanation </label>
        <input
          value={explanation}
          onChange={e => setExplanation(e.target.value)}
          placeholder='Enter explanation...'
          type='text'
          className='input'
        ></input>
        <label htmlFor='amount'>
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder='Enter amount...'
          type='number'
          className='input'
        ></input>
        <button type='submit' value='Add' className='add-btn'>
          Add transaction
        </button>
        <button
          type='submit'
          onClick={handleClearAll}
          value='Add'
          className='clear-btn'
        >
          Clear all
        </button>
      </form>
    </div>
  );
};

export default AddNew;
