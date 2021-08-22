import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import FeaturedImageAndAuthorAvatar from '../FeaturedImageAndAuthorAvatar/FeaturedImageAndAuthorAvatar';

export default function FeaturedPostPreview({ post }) {
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
    <Flex direction="row" justify="space-between" w="100%">
      <FeaturedImageAndAuthorAvatar author={author} image={featuredImage} />
      <Spacer className="image-content-spacer" p="1%" />
      <Flex direction="column" justify="start" w="50%">
        <Heading as="h2" size="2xl">
          {title}
        </Heading>
        <Spacer className="title-excerpt-spacer" p="1%" />
        <Text className="excerpt" fontSize="3xl">
          {excerpt}
        </Text>
        <Spacer className="excerpt-date-spacer" p="1%" />
        <Flex direction="row" justify="space-between">
          <Text className="published-date" fontSize="xl">
            {displayedPublishedDate}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

FeaturedPostPreview.propTypes = {
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
