import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Spacer } from '@chakra-ui/react';
import Header from '../Header/Header';

export default function PageLayout({ currentUser, children }) {
  return (
    <Flex direction="row">
      <Spacer className="left-margin" p="4%" />
      <Flex direction="column" w="92%">
        <Spacer className="top-margin" p="2%" />
        <Header currentUser={currentUser} />
        <Spacer className="header-page-content-spacing" p="3%" />
        {children}
      </Flex>
      <Spacer className="right-margin" p="4%" />
    </Flex>
  );
}

PageLayout.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};
