import React from 'react';

export default ({ title, imageUrl }) => {
  return (
    <li key={title}>
      <h4>
        {title}
      </h4>
      <img src={imageUrl} height="25%" width="25%" alt="" />
    </li>
  );
};