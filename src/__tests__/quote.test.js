import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../pages/quote';

it('it test the render Home page', () => {
  const quote = renderer
    .create(<Quote />)
    .toJSON();
  expect(quote).toMatchSnapshot();
});
