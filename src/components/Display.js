import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { next } = props;
  return (
    <div>
      <h1>{next}</h1>
    </div>
  );
};

Display.propTypes = {
  next: PropTypes.string,
};

Display.defaultProps = {
  next: '0',
};

export default Display;
