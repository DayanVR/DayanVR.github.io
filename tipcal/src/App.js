import './App.css';
import React, { useState, useEffect } from 'react';
import Result from './Result';
import Calculation from './Calculation';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [percentage, setPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [people, setPeople] = useState('');
  const [numPeople, setNumPeople] = useState(true);
  
  const handleTipClick = (percentage) => {
    setPercentage(percentage);
  };
  const handleBill = (e) => {
    setBillAmount(parseFloat(e.target.value));
  };
  const handlePeople = (e) => {
    setPeople(parseInt(e.target.value));
  };
  
  
  const handleReset = () => { 
    setBillAmount('')
    setPeople('')
    setPercentage(0)
   }

  useEffect(() => {
    const calculateTip = () => {
      const tipPercent = percentage / 100;
      let tip = billAmount * tipPercent;
      let total = tip / people;
      
      if(isNaN(tip) || isNaN(total) || total === 0 || tip === 0 || tip === 'Infinity'|| total === 'Infinity') {
        setTipAmount('0.00');
        setTotalAmount('0.00');
      } else {
        setTipAmount(tip.toFixed(2));
        setTotalAmount(total.toFixed(2));
      }
  
      if (people > 0) {
        setNumPeople(false)
      } else {
        setNumPeople(true)
      }
    }
    calculateTip()
  }, [billAmount, percentage, people])

  return (
    <div className="App">
        <header>
          SPLI <br/>
          TTER
        </header>
      <div className='container'>
        <Calculation 
          handleTipClick={handleTipClick}
          billAmount={billAmount}
          handleBill={handleBill}
          people={people}
          handlePeople={handlePeople}
          numPeople={numPeople}
          percentage={percentage}
        />
        <Result 
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
