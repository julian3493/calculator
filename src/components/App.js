import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../styles/app.css';

const App = () => {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btn) => {
    const data = calculate(calculation, btn);
    setCalculation({ ...data });
  };

  return (
    <div className="App">
      <Display result={calculation} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
