import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => {
  const { next } = result;
  console.log(result);
  return (
    <div>
      <h1>{next}</h1>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    next: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    operation: PropTypes.string,
  }).isRequired,
};

export default Display;
