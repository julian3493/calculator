import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/home';

it('it test the render Home page', () => {
  const home = renderer
    .create(<Home />)
    .toJSON();
  expect(home).toMatchSnapshot();
});
