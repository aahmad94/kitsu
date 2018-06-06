import React from 'react';
import ListItem from './list_item';

export default ({ items, onItemSelect }) => {
  return (

    <ul className="list">
      {
        items.map(item => {
          const itemId = item.id;
          const titleType = Object.keys(item.attributes.titles)[0];
          const title = item.attributes.titles[titleType];
          const coverImage = item.attributes.coverImage;
          const imageUrl = coverImage ? coverImage.original : "";
          return (
            <ListItem 
              key={itemId}
              itemId={itemId}
              title={title}
              imageUrl={imageUrl}
              onItemSelect={onItemSelect}
              />
          );
        })
      }
    </ul>
    );
};