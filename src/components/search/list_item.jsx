import React from 'react';

export default ({ title, imageUrl }) => {
  return (
    <li 
      key={title}
      className="list-item"
    >
      <div className="list-item-title">
        {title}
      </div>
      <img src={imageUrl} alt="" />
    </li>
  );
};