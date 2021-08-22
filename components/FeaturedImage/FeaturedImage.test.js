import React from 'react';
import { shallow } from 'enzyme';
import FeaturedImage from './FeaturedImage';

describe('FeaturedImage', () => {
  let container;
  const imageUrl = '../../assets/testImages/featuredImage.jpg';

  beforeEach(() => {
    container = shallow(<FeaturedImage imageUrl={imageUrl} />);
  });

  it('should render an Image with an aspect ratio of 4/3 and a max width of 100%', () => {
    expect(container.find('AspectRatio').prop('ratio')).toEqual(4 / 3);
    expect(container.find('AspectRatio').prop('maxW')).toEqual('100%');
    expect(container.find('Image').prop('src')).toEqual(imageUrl);
  });
});
