import React from 'react';
import { AspectRatio, Image } from '@chakra-ui/react';

export default function FeaturedImage({ imageSrc }) {
  return (
    <AspectRatio maxW={'100%'} ratio={4 / 3}>
      <Image src={imageSrc} />
    </AspectRatio>
  );
}
