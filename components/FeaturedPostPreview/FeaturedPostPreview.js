import React from 'react';
import { Avatar, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import FeaturedImageAndAuthorAvatar from '../FeaturedImageAndAuthorAvatar/FeaturedImageAndAuthorAvatar';

export default function FeaturedPostPreview({ post }) {
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
    <Flex direction={'row'} justify={'space-between'} w="100%">
      <FeaturedImageAndAuthorAvatar author={author} image={image} />
      <Spacer className={'image-content-spacer'} p={'1%'} />
      <Flex direction={'column'} justify={'start'} w="50%">
        <Heading as={'h2'} size={'2xl'}>
          {title}
        </Heading>
        <Spacer className={'title-excerpt-spacer'} p={'1%'} />
        <Text className={'excerpt'} fontSize={'3xl'}>
          {excerpt}
        </Text>
        <Spacer className={'excerpt-date-spacer'} p={'1%'} />
        <Flex direction={'row'} justify={'space-between'}>
          <Text className={'published-date'} fontSize={'xl'}>
            {publishedDate}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
