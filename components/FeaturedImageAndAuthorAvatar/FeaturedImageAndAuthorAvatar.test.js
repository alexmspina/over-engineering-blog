import React from 'react';
import { shallow } from 'enzyme';
import FeaturedImageAndAuthorAvatar from './FeaturedImageAndAuthorAvatar';

describe('FeaturedImageAndAuthorAvatar', () => {
  let container;
  const imageUrl = '../../assets/testImages/featuredImage.jpg';
  const image = { imageUrl };
  const authorName = 'Test Author';
  const authorImageUrl = '../../assets/testImages/avatar.jpg';
  const author = { name: authorName, imageUrl: authorImageUrl };

  beforeEach(() => {
    container = shallow(
      <FeaturedImageAndAuthorAvatar image={image} author={author} />
    );
  });

  it('should render a FeaturedImage with the correct imageSrc', () => {
    expect(container.find('FeaturedImage').prop('imageUrl')).toEqual(imageUrl);
  });

  it('should render a Grid component with 1 column and 1 row and it contains 2 children', () => {
    expect(container.find('.image-avatar-grid').length).toEqual(1);
    expect(
      container.find('.image-avatar-grid').prop('templateColumns')
    ).toEqual(1);
    expect(container.find('.image-avatar-grid').prop('templateRows')).toEqual(
      1
    );
    expect(container.find('.image-avatar-grid').prop('w')).toEqual('100%');
    expect(container.find('.image-avatar-grid').prop('h')).toEqual('100%');
    expect(container.find('.image-avatar-grid').children().length).toEqual(2);
  });

  it('should render 2 GridItem components that position the Avatar over the bottom left corner of the featured Image', () => {
    // ensures that the two objects occupy the same x-y index space, but
    // the z-index of the avatar is greater than the z-index of the image
    expect(container.find('.image-grid-item').length).toEqual(1);
    expect(container.find('.image-grid-item').prop('colSpan')).toEqual(1);
    expect(container.find('.image-grid-item').prop('colStart')).toEqual(0);
    expect(container.find('.image-grid-item').prop('colEnd')).toEqual(1);
    expect(container.find('.image-grid-item').prop('rowStart')).toEqual(0);
    expect(container.find('.image-grid-item').prop('rowEnd')).toEqual(1);
    expect(container.find('.image-grid-item').prop('zIndex')).toEqual('0');

    expect(container.find('.avatar-grid-item').length).toEqual(1);
    expect(container.find('.avatar-grid-item').prop('colSpan')).toEqual(1);
    expect(container.find('.avatar-grid-item').prop('colStart')).toEqual(0);
    expect(container.find('.avatar-grid-item').prop('colEnd')).toEqual(1);
    expect(container.find('.avatar-grid-item').prop('rowStart')).toEqual(0);
    expect(container.find('.avatar-grid-item').prop('rowEnd')).toEqual(1);
    expect(container.find('.avatar-grid-item').prop('zIndex')).toEqual('1');
  });

  it('should render a Flex column that holds the author Avatar and positions it in the bottom left corner', () => {
    expect(container.find('.avatar-flex-column').prop('flexDirection')).toEqual(
      'column'
    );
    expect(container.find('.avatar-flex-column').prop('justify')).toEqual(
      'flex-end'
    );
    expect(container.find('.avatar-flex-column').prop('align')).toEqual(
      'flex-start'
    );
    expect(container.find('.avatar-flex-column').prop('h')).toEqual('100%');
  });

  it('should render the Avatar component', () => {
    expect(container.find('Avatar').length).toEqual(1);
    expect(container.find('Avatar').prop('src')).toEqual(authorImageUrl);
    expect(container.find('Avatar').prop('name')).toEqual(authorName);
  });
});
