import React from 'react';
import { Avatar, Flex, Heading } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex justify={'space-between'}>
      <Heading>Over Engineering</Heading>
      <Avatar
        name="Dwayne"
        src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
      />
    </Flex>
  );
}
