import React from 'react';

export default ({item}) => {
  console.log({item});
  const itemId = item.id;
  const titleType = Object.keys(item.attributes.titles)[0];
  const title = item.attributes.titles[titleType];
  const coverImage = item.attributes.coverImage;
  const imageUrl = coverImage ? coverImage.original : "";
  let date = Date.parse(item.attributes.createdAt); 
  date = new Date(date).toUTCString().split(",")[1].split(" ").slice(0, 4).join(" ");

  const synopsis = item.attributes.synopsis;
  return (
    <div className="item">
      <div className="item-title">{title}</div>
      <img className="cover-image" src={imageUrl} alt=""/>
      <div className="date">{date}</div>
      <div className="synopsis">{synopsis}</div>
    </div>
  );
};