import React from 'react';
import { shallow } from 'enzyme';
import PostPreview from './PostPreview';

describe('PostPreview', () => {
  let post = {
    publishedDate: '2021-06-29T21:26:19Z',
    featuredImageUrl: '../../assets/testImages/FeaturedPostPreview.jpg',
    authorImageUrl: '../../assets/testImages/avatar.jpg',
    authorName: 'Test Avatar',
    title: 'Post 1',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
      tempor incididunt ut labore et dolore magna aliqua.',
  };

  let container;

  beforeEach(() => (container = shallow(<PostPreview post={post} />)));

  it('should render a <Flex> component: 1 for the whole post preview and 1 for the \
      avatar placement over the featured image', () => {
    expect(container.find('Flex').length).toEqual(1);
    expect(container.find('.post-preview-column').length).toEqual(1);
  });

  it('should render 3 <Spacer> components', () => {
    expect(container.find('Spacer').length).toEqual(4);
    expect(container.find('.image-date-spacer').prop('p')).toEqual('0.25%');
    expect(container.find('.date-title-spacer').prop('p')).toEqual('0.25%');
    expect(container.find('.title-excerpt-spacer').prop('p')).toEqual('0.25%');
    expect(container.find('.preview-bottom-spacer').prop('p')).toEqual('5%');
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
