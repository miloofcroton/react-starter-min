import React from 'react';
import { shallow } from 'enzyme';
import About from '../index.js';

describe('<About />', () => {
  test('renders', () => {
    const data = {
      markdownRemark: {
        frontmatter: {
          title: 'asdf',
        },
        html: 'xyz',
      }
    };

    const wrapper = shallow(<About data={data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
