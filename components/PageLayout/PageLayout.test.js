import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';
import { Flex, Spacer } from '@chakra-ui/react';
import PageLayout from './PageLayout';

describe('PageLayout', () => {
  let container;

  beforeEach(() => (container = shallow(<PageLayout />)));

  it('should render 2 Flex components, 3 Spacer components, and a Header component', () => {
    expect(
      container.containsAllMatchingElements([<Flex />, <Spacer />, <Header />])
    );
  });
});
