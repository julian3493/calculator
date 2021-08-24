import React from 'react';
import PropTypes from 'prop-types';
import '../styles/display.css';

const Display = ({ result }) => {
  const { next } = result;
  return (
    <div className="display">
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
