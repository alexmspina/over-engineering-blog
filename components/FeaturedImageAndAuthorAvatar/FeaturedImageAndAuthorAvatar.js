import React from 'react';
import { Avatar, Grid, GridItem, Flex } from '@chakra-ui/react';
import FeaturedImage from '../FeaturedImage/FeaturedImage';

export default function FeaturedImageAndAuthorAvatar({ image, author }) {
  return (
    <Grid
      className={'image-avatar-grid'}
      templateColumns={1}
      templateRows={1}
      h={'100%'}
      w={'100%'}
    >
      <GridItem
        zIndex={'0'}
        className={'image-grid-item'}
        colSpan={1}
        colStart={0}
        colEnd={1}
        rowStart={0}
        rowEnd={1}
      >
        <FeaturedImage imageSrc={image.imageSrc} />
      </GridItem>
      <GridItem
        className={'avatar-grid-item'}
        colSpan={1}
        colStart={0}
        colEnd={1}
        rowStart={0}
        rowEnd={1}
        zIndex={'1'}
      >
        <Flex
          className={'avatar-flex-column'}
          flexDirection={'column'}
          justify={'flex-end'}
          align={'flex-start'}
          h={'100%'}
        >
          <Avatar name={author.name} src={author.imageSrc} />
        </Flex>
      </GridItem>
    </Grid>
  );
}
