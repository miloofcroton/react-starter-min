import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index.js';

describe('<Header />', () => {
  test('renders', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
