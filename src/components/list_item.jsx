import React from 'react';

export default ({ itemId, title, imageUrl, history, onItemSelect }) => {
  
  return (
    <li 
      key={title}
      className="list-item"
      onClick={e => onItemSelect(itemId)}
    >
      <div className="list-item-title">
        {title}
      </div>
      <img src={imageUrl} alt="" />
    </li>
  );
};
