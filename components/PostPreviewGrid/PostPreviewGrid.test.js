import React from 'react';
import { shallow } from 'enzyme';
import PostPreviewGrid from './PostPreviewGrid';

const posts = [
  {
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
  },
  {
    publishedDate: '2021-06-29T21:26:19Z',
    id: 'd1c4605a-597a-4e42-b410-a822ae3c0cd4-2',
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
      current: 'post-2',
    },
    title: 'Post 2',
  },
];

describe('PostPreviewGrid', () => {
  let container;

  beforeEach(() => {
    container = shallow(<PostPreviewGrid posts={posts} />);
  });

  it('should render a Flex column and wrap children post previews', () => {
    expect(container.find('Flex').length).toEqual(1);
    expect(container.find('Flex').prop('direction')).toEqual('row');
    expect(container.find('Flex').prop('wrap')).toEqual('wrap');
    expect(container.find('Flex').prop('w')).toEqual('100%');
    expect(container.find('Flex').prop('justify')).toEqual('space-between');
  });

  it('should render 2 PostPreviews', () => {
    expect(container.find('PostPreview').length).toEqual(2);
  });
});
