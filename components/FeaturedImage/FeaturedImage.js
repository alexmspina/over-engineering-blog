import React from 'react';
import PropTypes from 'prop-types';
import { AspectRatio, Image } from '@chakra-ui/react';

export default function FeaturedImage({ imageUrl }) {
  return (
    <AspectRatio maxW="100%" ratio={4 / 3}>
      <Image src={imageUrl} />
    </AspectRatio>
  );
}

FeaturedImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
