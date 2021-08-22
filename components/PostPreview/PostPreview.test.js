import React from 'react';
import { shallow } from 'enzyme';
import PostPreview from './PostPreview';

describe('PostPreview', () => {
  const post = {
    publishedDate: '2021-06-29T21:26:19Z',
    id: 'd1c4605a-597a-4e42-b410-a822ae3c0cd4',
    _rev: 'JaQUesOtC6McJIPq0dI55W',
    _type: 'post',
    _updatedAt: '2021-07-01T15:48:52Z',
    author: {
      imageUrl: '../assets/avatar.jpg',
      name: 'Test Author',
    },
    body: [
      {
        _key: '41c83d956a52',
        _type: 'block',
        children: [
          {
            _key: 'a3c7bc9a8135',
            _type: 'span',
            marks: [],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    categories: [
      {
        _key: '86a553f52d90',
        _ref: '58492e34-13eb-4d70-8287-2153e4721b41',
        _type: 'reference',
      },
    ],
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    featuredImage: {
      imageUrl: '../assets/featuredImage.jpg',
    },
    slug: {
      _type: 'slug',
      current: 'post-1',
    },
    title: 'Post 1',
  };

  let container;

  beforeEach(() => {
    container = shallow(<PostPreview post={post} />);
  });

  it('should render a <Flex> component: 1 for the whole post preview and 1 for the avatar placement over the featured image', () => {
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
    ).toEqual({ imageUrl: post.featuredImage.imageUrl });
    expect(
      container.find('FeaturedImageAndAuthorAvatar').prop('author')
    ).toEqual({ name: post.author.name, imageUrl: post.author.imageUrl });
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
