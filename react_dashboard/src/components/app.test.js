import React from 'react'
import App from './app.js';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
})

describe('Dashboard', () => {
  it('Page loads with text "Good day"', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toIncludeText('Good day');
  })
})


