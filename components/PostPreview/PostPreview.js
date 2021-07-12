import React from 'react';
import {
  AspectRatio,
  Avatar,
  Grid,
  GridItem,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import FeaturedImage from '../FeaturedImage/FeaturedImage';
import FeaturedImageAndAuthorAvatar from '../FeaturedImageAndAuthorAvatar/FeaturedImageAndAuthorAvatar';

export default function PostPreview({ post }) {
  const publishedDateString = post.publishedDate;
  const featuredImageUrl = post.featuredImageUrl;
  const image = { imageSrc: featuredImageUrl };
  const title = post.title;
  const authorName = post.authorName;
  const authorImageUrl = post.authorImageUrl;
  const author = { name: authorName, imageSrc: authorImageUrl };
  const excerpt = post.excerpt;

  const publishedDateMilliseconds = Date.parse(publishedDateString);
  const publishedDateObject = new Date(publishedDateMilliseconds);
  const publishedDay = publishedDateObject.getDate();
  const publishedYear = publishedDateObject.getFullYear();
  const publishedMonth = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(publishedDateObject);
  const publishedDate = `${publishedMonth} ${publishedDay}, ${publishedYear}`;

  return (
    <Flex
      className={'post-preview-column'}
      direction={'column'}
      justify={'space-between'}
      w="30%"
    >
      <FeaturedImageAndAuthorAvatar author={author} image={image} />
      <Spacer className={'image-date-spacer'} p={'0.25%'} />
      <Text className={'published-date'} fontSize={'md'}>
        {publishedDate}
      </Text>
      <Spacer className={'date-title-spacer'} p={'0.25%'} />
      <Heading as={'h2'} size={'lg'}>
        {title}
      </Heading>
      <Spacer className={'title-excerpt-spacer'} p={'0.25%'} />
      <Text className={'excerpt'} fontSize={'lg'}>
        {excerpt}
      </Text>
      <Spacer className={'preview-bottom-spacer'} p={'5%'} />
    </Flex>
  );
}
