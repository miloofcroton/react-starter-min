import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../index.js';

describe('<Footer />', () => {
  test('renders', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
