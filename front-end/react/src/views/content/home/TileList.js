import React, { Fragment } from 'react';
import TileCard from './TileCard';

const links = [
  {
    to: '/work',
    src: '/src/assets/categories/code.jpg',
    alt: 'code',
    text: 'Work',
  },
  {
    to: '/play',
    src: '/src/assets/categories/nature.jpg',
    alt: 'nature',
    text: 'Play',
  },
  {
    to: '/thoughts',
    src: '/src/assets/categories/thinker.jpg',
    alt: 'thinker',
    text: 'Thoughts',
  }
];

const TileList = () => {

  const tiles = links.map(details => <TileCard key={details.text} details={details} />);

  return (
    <Fragment>
      {tiles}
    </Fragment>
  );
};

export default TileList;
