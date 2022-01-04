import React from 'react';

const VideoItem = ({ image }) => {
  return (
    <div>
      <img
        alt={image.description}
        src={image.urls.regular}
        style={{ maxWidth: '416px' }}
      />
    </div>
  );
};

export default VideoItem;
