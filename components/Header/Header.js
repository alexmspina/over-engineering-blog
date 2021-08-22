import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Flex, Heading } from '@chakra-ui/react';

export default function Header({ currentUser }) {
  const { name, imageUrl } = currentUser;

  return (
    <Flex justify="space-between">
      <Heading size="4xl">Over Engineering</Heading>
      <Avatar size="lg" name={name} src={imageUrl} />
    </Flex>
  );
}

Header.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};
