import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';
import PageLayout from '../components/PageLayout/PageLayout';

describe('Home', () => {
  let container;

  beforeEach(() => (container = shallow(<Home />)));

  it('should render a PageLayout component', () => {
    expect(container.containsMatchingElement(<PageLayout />)).toEqual(true);
  });
});
