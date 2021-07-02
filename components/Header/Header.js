import React from 'react';
import { Avatar, Flex, Heading } from '@chakra-ui/react';

export default function Header({ currentUser }) {
  console.log('currentUser in Header', currentUser);
  const imageUrl = currentUser.imageUrl;
  return (
    <Flex justify={'space-between'}>
      <Heading>Over Engineering</Heading>
      <Avatar name="Dwayne" src={imageUrl} />
    </Flex>
  );
}
