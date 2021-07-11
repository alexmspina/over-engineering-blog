import React from 'react';
import { Flex } from '@chakra-ui/react';
import PostPreview from '../PostPreview/PostPreview';

export default function PostPreviewGrid({ posts }) {
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.id} post={post} />
  ));

  return (
    <Flex direction={'row'} wrap={'wrap'} w={'100%'} justify={'space-between'}>
      {postPreviews}
    </Flex>
  );
}
