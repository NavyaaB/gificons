import React from 'react';

const GifyItem = (image) => {
  return (
    <div className="gify-item">
      <img alt="gify" src={image.gify.images.downsized.url} />
    </div>
  )
};

export default GifyItem;