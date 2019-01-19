import React from 'react';

const ThingCard = ({ thing }) => {

  const { title, description } = thing;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ThingCard;
