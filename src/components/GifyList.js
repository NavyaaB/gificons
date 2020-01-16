import React from 'react';
import GifyItem from './GifyItem';

const GifyList = (props) => {
  const gifyItems = props.gifys.map((image) => {
    return <GifyItem key={image.id} gify={image} />
  });

  return (
    <div className="gify-list">{gifyItems}</div>
  );
};

export default GifyList;