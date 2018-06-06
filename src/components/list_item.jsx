import React from 'react';

export default ({ itemId, title, imageUrl, onItemSelect }) => {
  
  return (
    <li 
      key={title}
      className="item"
      onClick={e => onItemSelect(itemId)}
    >
      <div className="item-title">
        {title}
      </div>
      <img className="cover-image" src={imageUrl} alt="" />
    </li>
  );
};
