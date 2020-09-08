import React from 'react';
import { shallow } from 'enzyme';
import { Authentication } from '../component/auth';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<Authentication />);
  expect(wrapper).toMatchSnapshot();
});