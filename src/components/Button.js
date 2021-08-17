import React from 'react';
import PropTypes from 'prop-types';

function handleClick(btnName, props) {
  return (
    props.clickHandler(btnName)
  );
}

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button type="button" name="button" onClick={() => handleClick(name, props)}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
