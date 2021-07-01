import React from 'react';
import Header from '../Header/Header';
import { Flex, Spacer } from '@chakra-ui/react';

export default function PageLayout() {
  return (
    <Flex direction={'row'}>
      <Spacer p={'4%'} />
      <Flex direction={'column'} w={'92%'}>
        <Spacer p={'2%'} />
        <Header />
      </Flex>
      <Spacer p={'4%'} />
    </Flex>
  );
}
