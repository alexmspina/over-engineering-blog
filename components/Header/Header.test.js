import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { Avatar, Heading } from '@chakra-ui/react';

describe('Header', () => {
  let container;

  beforeEach(() => (container = shallow(<Header />)));

  it('should render a <Flex>', () => {
    expect(container.find('Flex').length).toEqual(1);
  });

  it('should render a <Heading> component and an <Avatar> component', () => {
    expect(container.containsAllMatchingElements([<Heading />, <Avatar />]));
  });
});
