import React from 'react';
import { overlayDrafts, getClient } from './sanity.server';
import { createClient } from 'next-sanity';

const posts = [
  {
    _createdAt: '2021-06-29T21:26:19Z',
    id: 'd1c4605a-597a-4e42-b410-a822ae3c0cd4',
    _rev: 'JaQUesOtC6McJIPq0dI55W',
    _type: 'post',
    _updatedAt: '2021-07-01T15:48:52Z',
    author: {
      _ref: '3840c4c8-0fb4-4d49-9c1b-9485bbc668b0',
      _type: 'reference',
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
    mainImage: {
      _type: 'image',
      asset: {
        _ref: 'image-0360990f1ff00e0e9f107b25af8e0943d8ba2a94-5184x3456-jpg',
        _type: 'reference',
      },
    },
    slug: {
      _type: 'slug',
      current: 'post-1',
    },
    title: 'Post 1',
  },
  {
    _createdAt: '2021-06-29T21:26:19Z',
    id: 'drafts.d1c4605a-597a-4e42-b410-a822ae3c0cd4-2',
    _rev: 'JaQUesOtC6McJIPq0dI55W',
    _type: 'post',
    _updatedAt: '2021-07-01T15:48:52Z',
    author: {
      _ref: '3840c4c8-0fb4-4d49-9c1b-9485bbc668b0',
      _type: 'reference',
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
    mainImage: {
      _type: 'image',
      asset: {
        _ref: 'image-0360990f1ff00e0e9f107b25af8e0943d8ba2a94-5184x3456-jpg',
        _type: 'reference',
      },
    },
    slug: {
      _type: 'slug',
      current: 'post-2',
    },
    title: 'Post 2',
  },
];

const expectedPosts = [
  {
    _createdAt: '2021-06-29T21:26:19Z',
    id: 'd1c4605a-597a-4e42-b410-a822ae3c0cd4',
    _rev: 'JaQUesOtC6McJIPq0dI55W',
    _type: 'post',
    _updatedAt: '2021-07-01T15:48:52Z',
    author: {
      _ref: '3840c4c8-0fb4-4d49-9c1b-9485bbc668b0',
      _type: 'reference',
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
    mainImage: {
      _type: 'image',
      asset: {
        _ref: 'image-0360990f1ff00e0e9f107b25af8e0943d8ba2a94-5184x3456-jpg',
        _type: 'reference',
      },
    },
    slug: {
      _type: 'slug',
      current: 'post-1',
    },
    title: 'Post 1',
  },
];

const postsMissingID = [
  {
    _createdAt: '2021-06-29T21:26:19Z',
    _rev: 'JaQUesOtC6McJIPq0dI55W',
    _type: 'post',
    _updatedAt: '2021-07-01T15:48:52Z',
    author: {
      _ref: '3840c4c8-0fb4-4d49-9c1b-9485bbc668b0',
      _type: 'reference',
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
    mainImage: {
      _type: 'image',
      asset: {
        _ref: 'image-0360990f1ff00e0e9f107b25af8e0943d8ba2a94-5184x3456-jpg',
        _type: 'reference',
      },
    },
    slug: {
      _type: 'slug',
      current: 'post-1',
    },
    title: 'Post 1',
  },
  {
    _createdAt: '2021-06-29T21:26:19Z',
    id: 'drafts.d1c4605a-597a-4e42-b410-a822ae3c0cd4-2',
    _rev: 'JaQUesOtC6McJIPq0dI55W',
    _type: 'post',
    _updatedAt: '2021-07-01T15:48:52Z',
    author: {
      _ref: '3840c4c8-0fb4-4d49-9c1b-9485bbc668b0',
      _type: 'reference',
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
    mainImage: {
      _type: 'image',
      asset: {
        _ref: 'image-0360990f1ff00e0e9f107b25af8e0943d8ba2a94-5184x3456-jpg',
        _type: 'reference',
      },
    },
    slug: {
      _type: 'slug',
      current: 'post-2',
    },
    title: 'Post 2',
  },
];

describe('overlayDrafts', () => {
  it('should return a list of available posts, excluding drafts', () => {
    const actualPosts = overlayDrafts(posts);

    expect(actualPosts).toEqual(expectedPosts);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(overlayDrafts()).toEqual([]);
  });

  it('should throw error because of missing document ID', () => {
    expect(() => {
      overlayDrafts(postsMissingID);
    }).toThrowError('Ensure that `id` is included in query projection');
  });
});

jest.mock('next-sanity');

describe('getClient', () => {
  class PreviewClient {}

  class SanityClient {}

  beforeAll(() => {
    process.env = {
      ...process.env,
      SANITY_API_TOKEN: 'testing',
    };

    createClient.mockImplementation((config) => {
      if (config.token === 'testing') {
        return new PreviewClient();
      } else {
        return new SanityClient();
      }
    });
  });

  it('should return an instance of PreviewClient if preview is true', () => {
    expect(getClient(true)).toBeInstanceOf(PreviewClient);
  });

  it('should return an instance of SanityClient if preview is false', () => {
    process.env.SANITY_API_TOKEN = 'production';
    expect(getClient(false)).toBeInstanceOf(SanityClient);
    process.env.SANITY_API_TOKEN = 'testing';
  });
});
