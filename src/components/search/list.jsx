import React from 'react';
import ListItem from './list_item';
export default ({ items }) => {
  return (
    <ul>
      {
        items.map(item => {
          const titleType = Object.keys(item.attributes.titles)[0];
          const title = item.attributes.titles[titleType];
          const coverImage = item.attributes.coverImage;
          const imageUrl = coverImage ? coverImage.original : "";
          return (
            <ListItem 
              key={title}
              title={title}
              imageUrl={imageUrl}
              />
          );
        })
      }
    </ul>
    );
};