import React from "react";

import "./card.styles.scss";

interface Props {
  photoItem: any;
  description: string;
  attributionLink: string;
  user: string;
}

const Card = ({ photoItem, description, attributionLink, user }: Props) => (
  <div className='card-container'>
    <div className='card-image-wrapper'>
      <img alt={description} src={photoItem.urls.regular} />
    </div>
    <a
      href={`${attributionLink}?utm_source=demo&utm_medium=referral`}
      target='_blank'
    >
      {user}
    </a>
    <h3> {description} </h3>
  </div>
);

export default Card;
