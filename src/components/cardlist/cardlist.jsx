import React from "react";

import Card from "../card/card";

import "./cardlist.styles.scss";

const CardList = ({ photoList }) => (
  <div className='d-sm-flex flex-wrap justify-content-between align-items-center card-list'>
    {photoList.length > 0 &&
      photoList.map((photo) => (
        <div id={photo.id} key={photo.id}>
          <Card
            photoItem={photo}
            description={photo.alt_description}
            user={`${photo.user.first_name} ${photo.user.last_name}`}
            attributionLink={photo.user.links.html}
          />
        </div>
      ))}
  </div>
);

export default CardList;
