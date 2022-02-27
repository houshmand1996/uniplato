import React from 'react';
import { shallow } from '@/plugins/security/pages/security/node_modules/enzyme';
import { CustomButton } from './custom-button.component';

it('should render CustomButton component', () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot();
});
