import React from 'react';
import Button from './Button';

function handleClick(btnName, props) {
  return (
    props.clickHandler(btnName)
  );
}

function ButtonPanel(props) {
  return (
    <div className="panel">
      <div className="row">
        <Button name="AC" clickHandler={() => handleClick('AC', props)} />
        <Button name="+/-" clickHandler={() => handleClick('+/-', props)} />
        <Button name="%" clickHandler={() => handleClick('%', props)} />
        <Button name="÷" clickHandler={() => handleClick('÷', props)} />
      </div>
      <div className="row">
        <Button name="7" clickHandler={() => handleClick('7', props)} />
        <Button name="8" clickHandler={() => handleClick('8', props)} />
        <Button name="9" clickHandler={() => handleClick('9', props)} />
        <Button name="X" clickHandler={() => handleClick('X', props)} />
      </div>
      <div className="row">
        <Button name="4" clickHandler={() => handleClick('4', props)} />
        <Button name="5" clickHandler={() => handleClick('5', props)} />
        <Button name="6" clickHandler={() => handleClick('6', props)} />
        <Button name="-" clickHandler={() => handleClick('-', props)} />
      </div>
      <div className="row">
        <Button name="1" clickHandler={() => handleClick('1', props)} />
        <Button name="2" clickHandler={() => handleClick('2', props)} />
        <Button name="3" clickHandler={() => handleClick('3', props)} />
        <Button name="+" clickHandler={() => handleClick('+', props)} />
      </div>
      <div className="row">
        <Button name="0" clickHandler={() => handleClick('0', props)} />
        <Button name="." clickHandler={() => handleClick('.', props)} />
        <Button name="=" clickHandler={() => handleClick('=', props)} />
      </div>
    </div>
  );
}

export default ButtonPanel;
