import React from 'react';
import { Avatar, Flex, Heading } from '@chakra-ui/react';

export default function Header({ currentUser }) {
  const imageUrl = currentUser.imageUrl;

  return (
    <Flex justify={'space-between'}>
      <Heading>Over Engineering</Heading>
      <Avatar name={currentUser.name} src={imageUrl} />
    </Flex>
  );
}
