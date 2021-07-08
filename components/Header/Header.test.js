import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { Avatar, Heading } from '@chakra-ui/react';

describe('Header', () => {
  let currentUser = {
    name: 'Test Avatar',
    imageUrl: '../../assets/testImages/avatar.jpg',
  };
  let container;

  beforeEach(() => (container = shallow(<Header currentUser={currentUser} />)));

  it('should render a <Flex>', () => {
    expect(container.find('Flex').length).toEqual(1);
  });

  it('should render a <Heading> component and an <Avatar> component', () => {
    expect(container.containsAllMatchingElements([<Heading />, <Avatar />]));
  });

  it('should render the Avatar component with the avatar.jpg image from the assets test image folder', () => {
    expect(container.find('Avatar').prop('src')).toEqual(currentUser.imageUrl);
  });

  it('should render the Avatar component with the name "Test Avatar"', () => {
    expect(container.find('Avatar').prop('name')).toEqual(currentUser.name);
  });
});
