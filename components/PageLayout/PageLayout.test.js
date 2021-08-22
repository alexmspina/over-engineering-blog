import React from 'react';
import { shallow } from 'enzyme';
import { Flex, Spacer } from '@chakra-ui/react';
import Header from '../Header/Header';
import PageLayout from './PageLayout';

const currentUser = {
  name: 'Dwayne Johnson',
  imageUrl: '../../assets/testImages/avatar.jpg',
};

describe('PageLayout', () => {
  let container;

  beforeEach(() => {
    container = shallow(
      <PageLayout currentUser={currentUser}>
        <div>Child!</div>
        <div>Child!</div>
      </PageLayout>
    );
  });

  it('should render 2 Flex components, 3 Spacer components, and a Header component', () => {
    expect(
      container.containsAllMatchingElements([
        <Flex />,
        <Spacer />,
        <Header currentUser={currentUser} />,
      ])
    );
  });

  it('should render 3 Spacer components that create page layout margins', () => {
    expect(container.find('.left-margin').prop('p')).toEqual('4%');
    expect(container.find('.right-margin').prop('p')).toEqual('4%');
    expect(container.find('.top-margin').prop('p')).toEqual('2%');
  });

  it('should render a Spacer component to provide space between the Header and page content', () => {
    expect(container.find('.header-page-content-spacing').prop('p')).toEqual(
      '3%'
    );
  });
});
