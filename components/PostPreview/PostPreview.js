import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import FeaturedImageAndAuthorAvatar from '../FeaturedImageAndAuthorAvatar/FeaturedImageAndAuthorAvatar';

export default function PostPreview({ post }) {
  const { author, excerpt, featuredImage, publishedDate, title } = post;

  const publishedDateMilliseconds = Date.parse(publishedDate);
  const publishedDateObject = new Date(publishedDateMilliseconds);
  const publishedDay = publishedDateObject.getDate();
  const publishedYear = publishedDateObject.getFullYear();
  const publishedMonth = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(publishedDateObject);
  const displayedPublishedDate = `${publishedMonth} ${publishedDay}, ${publishedYear}`;

  return (
    <Flex
      className="post-preview-column"
      direction="column"
      justify="space-between"
      w="30%"
    >
      <FeaturedImageAndAuthorAvatar author={author} image={featuredImage} />
      <Spacer className="image-date-spacer" p="0.25%" />
      <Text className="published-date" fontSize="md">
        {displayedPublishedDate}
      </Text>
      <Spacer className="date-title-spacer" p="0.25%" />
      <Heading as="h2" size="lg">
        {title}
      </Heading>
      <Spacer className="title-excerpt-spacer" p="0.25%" />
      <Text className="excerpt" fontSize="lg">
        {excerpt}
      </Text>
      <Spacer className="preview-bottom-spacer" p="5%" />
    </Flex>
  );
}

PostPreview.propTypes = {
  post: PropTypes.shape({
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
  }).isRequired,
};
