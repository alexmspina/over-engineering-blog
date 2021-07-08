import React from 'react';
import { Avatar, Flex, Heading } from '@chakra-ui/react';

export default function Header({ currentUser }) {
  const imageUrl = currentUser.imageUrl;

  return (
    <Flex justify={'space-between'}>
      <Heading size={'4xl'}>Over Engineering</Heading>
      <Avatar size={'lg'} name={currentUser.name} src={imageUrl} />
    </Flex>
  );
}
