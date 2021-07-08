import React from 'react';
import { shallow } from 'enzyme';
import FeaturedPostPreview from './FeaturedPostPreview';
import { Avatar, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';

describe('FeaturedPostPreview', () => {
  let post = {
    publishedDate: '2021-06-29T21:26:19Z',
    featuredImageUrl: '../../assets/testImages/FeaturedPostPreview.jpg',
    authorImageUrl: '../../assets/testImages/avatar.jpg',
    authorName: 'Test Avatar',
    title: 'Post 1',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  let container;

  beforeEach(() => (container = shallow(<FeaturedPostPreview post={post} />)));

  it('should render a <Flex>', () => {
    expect(container.find('Flex').length).toEqual(3);
  });

  it('should render 3 <Spacer> components with a padding of 1%', () => {
    expect(container.find('Spacer').length).toEqual(3);

    expect(container.find('.image-content-spacer').prop('p')).toEqual('1%');

    expect(container.find('.title-excerpt-spacer').prop('p')).toEqual('1%');

    expect(container.find('.excerpt-date-spacer').prop('p')).toEqual('1%');
  });

  it('should render an <Image> component with the FeaturedPostPreview.jpg image from the assets test image folder', () => {
    expect(container.find('Image').prop('src')).toEqual(post.featuredImageUrl);
  });

  it('should render the Avatar component with the avatar.jpg image from the assets test image folder', () => {
    expect(container.find('Avatar').prop('src')).toEqual(post.authorImageUrl);
  });

  it('should render the Avatar component with the name "Test Avatar"', () => {
    expect(container.find('Avatar').prop('name')).toEqual(post.authorName);
  });

  it("should render a <Heading> component with the featured post's title in an h2 element", () => {
    expect(container.find('Heading').prop('as')).toEqual('h2');

    expect(container.find('Heading').text()).toEqual(post.title);
  });

  it("should render a <Text> component with the featured post's excerpt", () => {
    expect(container.find('.excerpt').text()).toEqual(post.excerpt);
  });

  it("should render a <Text> component with the featured post's published date", () => {
    const expectedDate = 'June 29, 2021';
    expect(container.find('.published-date').text()).toEqual(expectedDate);
  });
});
