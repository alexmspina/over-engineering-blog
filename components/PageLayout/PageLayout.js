import React from 'react';
import Header from '../Header/Header';
import { Flex, Spacer } from '@chakra-ui/react';

export default function PageLayout({
  Component,
  currentUser,
  pageProps,
  children,
}) {
  return (
    <Flex direction={'row'}>
      <Spacer className={'left-margin'} p={'4%'} />
      <Flex direction={'column'} w={'92%'}>
        <Spacer className={'top-margin'} p={'2%'} />
        <Header currentUser={currentUser} />
        <Spacer className={'header-page-content-spacing'} p={'3%'} />
        {children}
      </Flex>
      <Spacer className={'right-margin'} p={'4%'} />
    </Flex>
  );
}
