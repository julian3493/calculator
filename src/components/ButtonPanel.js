import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const handleClick = (btnName) => {
    clickHandler(btnName);
  };

  return (
    <div className="panel">
      <div className="row">
        <Button name="AC" clickHandler={() => handleClick('AC')} />
        <Button name="+/-" clickHandler={() => handleClick('+/-')} />
        <Button name="%" clickHandler={() => handleClick('%')} />
        <Button name="÷" clickHandler={() => handleClick('÷')} />
      </div>
      <div className="row">
        <Button name="7" clickHandler={() => handleClick('7')} />
        <Button name="8" clickHandler={() => handleClick('8')} />
        <Button name="9" clickHandler={() => handleClick('9')} />
        <Button name="X" clickHandler={() => handleClick('X')} />
      </div>
      <div className="row">
        <Button name="4" clickHandler={() => handleClick('4')} />
        <Button name="5" clickHandler={() => handleClick('5')} />
        <Button name="6" clickHandler={() => handleClick('6')} />
        <Button name="-" clickHandler={() => handleClick('-')} />
      </div>
      <div className="row">
        <Button name="1" clickHandler={() => handleClick('1')} />
        <Button name="2" clickHandler={() => handleClick('2')} />
        <Button name="3" clickHandler={() => handleClick('3')} />
        <Button name="+" clickHandler={() => handleClick('+')} />
      </div>
      <div className="row">
        <Button name="0" clickHandler={() => handleClick('0')} />
        <Button name="." clickHandler={() => handleClick('.')} />
        <Button name="=" clickHandler={() => handleClick('=')} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
