import React from 'react';
import { shallow } from 'enzyme';
import Home, { getStaticProps } from './index';
import { getClient, overlayDrafts } from '../sanity/sanity.server';
import { authorAvatarImageQuery, indexQuery } from '../sanity/queries';

const posts = [
  {
    _createdAt: '2021-06-29T21:26:19Z',
    _id: 'd1c4605a-597a-4e42-b410-a822ae3c0cd4',
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
];

const author = {
  _createdAt: '2021-06-29T21:25:45Z',
  _id: 'test',
  _rev: 'test',
  _type: 'author',
  _updatedAt: '2021-06-29T21:25:45Z',
  image: {
    _type: 'image',
    asset: {
      _ref: '../../assets/testImages/avatar.jpg',
      _type: 'reference',
    },
  },
  name: 'Dwayne Johnson',
  slug: {
    _type: 'slug',
    current: 'dwayne-johnson',
  },
};

class MockSanityClient {
  constructor(preview) {
    this.preview = preview;
  }

  async fetch(query) {
    switch (query) {
      case indexQuery:
        return new Promise((resolve) => {
          return resolve(posts);
        });
      case authorAvatarImageQuery:
        return new Promise((resolve) => {
          return resolve(author);
        });
      default:
        return { error: 'query not found' };
    }
  }
}

jest.mock('../sanity/sanity.server');

describe('Home', () => {
  let container;

  beforeEach(() => {
    process.env = {
      ...process.env,
      NEXT_PUBLIC_SANITY_PROJECT_ID: 'jctysokm',
      NEXT_PUBLIC_SANITY_DATASET: 'testing',
      SANITY_API_TOKEN: 'token',
      SANITY_PREVIEW_SECRET: 'secret',
    };

    container = shallow(<Home allPosts={posts} />);
  });

  it('should render a PageLayout component', () => {
    expect(container.find('PageLayout').length).toEqual(1);
  });

  it('should render a FeaturedPostPreview component', () => {
    expect(container.find('FeaturedPostPreview').length).toEqual(1);
  });
});

describe('getStaticProps', () => {
  beforeAll(() => {
    getClient.mockImplementation(() => {
      return new MockSanityClient(false);
    });

    overlayDrafts.mockImplementation(() => posts);
  });

  it("should return a list of posts and the current user's name and image reference", async () => {
    return getStaticProps({ preivew: false }).then((props) => {
      expect(props).toEqual({
        props: {
          allPosts: posts,
          currentUser: author,
          preview: false,
        },
      });
    });
  });
});
