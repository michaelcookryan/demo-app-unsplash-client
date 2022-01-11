import React from "react";

import "./card.styles.scss";

const Card = ({ photoItem, description, attributionLink, user }) => (
  <div className='card-container'>
    <div className='card-image-wrapper'>
      <img alt={description} src={photoItem.urls.regular} />
    </div>
    <a
      href={`${attributionLink}?utm_source=demo&utm_medium=referral`}
      target='_blank'
      rel='noreferrer'
    >
      {user}
    </a>
    <h3> {description} </h3>
  </div>
);

export default Card;
