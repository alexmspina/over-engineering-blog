import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import PostPreview from '../PostPreview/PostPreview';

export default function PostPreviewGrid({ posts }) {
  const postPreviews = posts.map((post) => {
    const { id } = post;
    return <PostPreview key={id} post={post} />;
  });

  return (
    <Flex direction="row" wrap="wrap" w="100%" justify="space-between">
      {postPreviews}
    </Flex>
  );
}

PostPreviewGrid.propTypes = {
  posts: PropTypes.arrayOf(
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
