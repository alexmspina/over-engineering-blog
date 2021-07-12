import React from 'react';
import { shallow } from 'enzyme';
import FeaturedPostPreview from './FeaturedPostPreview';

describe('FeaturedPostPreview', () => {
  let post = {
    publishedDate: '2021-06-29T21:26:19Z',
    featuredImageUrl: '../../assets/testImages/featuredImage.jpg',
    authorImageUrl: '../../assets/testImages/avatar.jpg',
    authorName: 'Test Avatar',
    title: 'Post 1',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  let container;

  beforeEach(() => (container = shallow(<FeaturedPostPreview post={post} />)));

  it('should render 3 <Flex> components', () => {
    expect(container.find('Flex').length).toEqual(3);
  });

  it('should render 3 <Spacer> components with a padding of 1%', () => {
    expect(container.find('Spacer').length).toEqual(3);
    expect(container.find('.image-content-spacer').prop('p')).toEqual('1%');
    expect(container.find('.title-excerpt-spacer').prop('p')).toEqual('1%');
    expect(container.find('.excerpt-date-spacer').prop('p')).toEqual('1%');
  });

  it('should render a <FeaturedImageAndAuthorAvatar> with the correct image and author props', () => {
    expect(
      container.find('FeaturedImageAndAuthorAvatar').prop('image')
    ).toEqual({ imageSrc: post.featuredImageUrl });
    expect(
      container.find('FeaturedImageAndAuthorAvatar').prop('author')
    ).toEqual({ name: post.authorName, imageSrc: post.authorImageUrl });
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
