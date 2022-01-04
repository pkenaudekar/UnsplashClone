import React from 'react';
import ImageItem from './ImageItem';

const ImageCardList = ({ images }) => {
  console.log(images);
  const renderedList = images.map((image) => {
    return <ImageItem key={image.id} image={image} />;
  });

  return (
    <div
      className=""
      style={{
        position: 'relative',
        padding: '0vh 0vw 0vh 3.02vw',
      }}
    >
      <div className="row justify-content-left">{renderedList}</div>
    </div>
  );
};

export default ImageCardList;
