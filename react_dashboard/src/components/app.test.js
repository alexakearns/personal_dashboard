import React from 'react'
import App from './app.js';
import { shallow }from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
})

describe('Home page on load', () => {
  it('Page loads with text "Dev Challenge"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toIncludeText('Dev Challenge');
  })
})




