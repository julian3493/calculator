import React from 'react';
import PropTypes from 'prop-types';
import '../styles/button.css';

const Button = ({ name, clickHandler }) => {
  const handleClick = (btnName) => {
    clickHandler(btnName);
  };

  const className = (name) => {
    const ops = ['+', '-', 'X', '÷', '='];
    if (name === '0') return 'btn btn0';
    if (ops.includes(name)) return 'btn btnColor';
    return 'btn';
  };

  return (
    <div className={className(name)}>
      <button className={className(name)} type="button" name="button" onClick={() => handleClick(name)}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
