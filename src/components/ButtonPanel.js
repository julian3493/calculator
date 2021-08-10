import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  return (
    <div className="panel">
      <div className="row">
        <Button name="AC" clickHandler={() => props.clickHandler('AC')} />
        <Button name="+/-" clickHandler={() => props.clickHandler('+/-')} />
        <Button name="%" clickHandler={() => props.clickHandler('%')} />
        <Button name="÷" clickHandler={() => props.clickHandler('÷')} />
      </div>
      <div className="row">
        <Button name="7" clickHandler={() => props.clickHandler('7')} />
        <Button name="8" clickHandler={() => props.clickHandler('8')} />
        <Button name="9" clickHandler={() => props.clickHandler('9')} />
        <Button name="X" clickHandler={() => props.clickHandler('X')} />
      </div>
      <div className="row">
        <Button name="4" clickHandler={() => props.clickHandler('4')} />
        <Button name="5" clickHandler={() => props.clickHandler('5')} />
        <Button name="6" clickHandler={() => props.clickHandler('6')} />
        <Button name="-" clickHandler={() => props.clickHandler('-')} />
      </div>
      <div className="row">
        <Button name="1" clickHandler={() => props.clickHandler('1')} />
        <Button name="2" clickHandler={() => props.clickHandler('2')} />
        <Button name="3" clickHandler={() => props.clickHandler('3')} />
        <Button name="+" clickHandler={() => props.clickHandler('+')} />
      </div>
      <div className="row">
        <Button name="0" clickHandler={() => props.clickHandler('0')} />
        <Button name="." clickHandler={() => props.clickHandler('.')} />
        <Button name="=" clickHandler={() => props.clickHandler('=')} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel