import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const handleClick = (btnName) => {
    clickHandler(btnName);
  };

  return (
    <div>
      <button type="button" name="button" onClick={() => handleClick(name)}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
