import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../pages/calculator';

it('it test the render Home page', () => {
  const calculator = renderer
    .create(<Calculator />)
    .toJSON();
  expect(calculator).toMatchSnapshot();
});
