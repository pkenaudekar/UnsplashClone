import React from 'react';
import ImageItem from './ImageItem';

const ImageCardList = ({ images }) => {
  const renderedList = images.map((image) => {
    return <ImageItem key={image.id} image={image} />;
  });

  return <div className="d-flex flex-wrap">{renderedList}</div>;
};

export default ImageCardList;
