import React from 'react'
import App from './app.js';
import { shallow }from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
})