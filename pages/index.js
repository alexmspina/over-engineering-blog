import React from 'react';
import PropTypes from 'prop-types';
import { Spacer } from '@chakra-ui/react';
import FeaturedPostPreview from '../components/FeaturedPostPreview/FeaturedPostPreview';
import PageLayout from '../components/PageLayout/PageLayout';
import { indexQuery, authorAvatarImageQuery } from '../sanity/queries';
import { getClient, overlayDrafts } from '../sanity/sanity.server';
import PostPreviewGrid from '../components/PostPreviewGrid/PostPreviewGrid';

export default function Home({ allPosts, currentUser }) {
  const featuredPost = [...allPosts][0];
  const posts = [...allPosts].slice(1, allPosts.length);
  return (
    <PageLayout currentUser={currentUser}>
      <FeaturedPostPreview post={featuredPost} />
      <Spacer className="featured-post-post-grid-spacer" p="3%" />
      <PostPreviewGrid posts={posts} />
    </PageLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const client = getClient(preview);
  const allPosts = overlayDrafts(await client.fetch(indexQuery));

  const currentUser = await getClient(preview).fetch(authorAvatarImageQuery);
  return {
    props: { allPosts, preview, currentUser },
  };
}

Home.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  allPosts: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      excerpt: PropTypes.string.isRequired,
      featuredImage: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
      }).isRequired,
      publishedDate: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
