import React from 'react';

const ImageItem = ({ image }) => {
  return (
    <div
      className="col align-self-center"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0vh 0.2vw',
      }}
    >
      <img
        alt={image.description}
        src={image.urls.regular}
        style={{
          maxHeight: '25.05vw',
          padding: '1.6238159675236807vh 0vw',
        }}
      />
    </div>
  );
};

export default ImageItem;
