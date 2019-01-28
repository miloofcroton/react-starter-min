import React from 'react';
import { shallow } from 'enzyme';
import SiteIndex from '../index';

describe('SiteIndex', () => {
  test('renders correctly', () => {
    const location = {
      pathname: '/',
    };

    // const wrapper = renderer.create(<SiteIndex location={location} />).toJSON();
    const wrapper = shallow(
      <SiteIndex location={location} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
