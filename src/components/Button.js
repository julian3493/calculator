import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button type="button" name="button" onClick={ handleClick(name) }>{name}</button>
    </div>
  );
};

function handleClick(btnName) {
  return(
    props.clickHandler(btnName)
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
