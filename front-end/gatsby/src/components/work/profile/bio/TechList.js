import React, { Fragment } from 'react';
import { TechIcon } from '../../../../styles/Icons';

const listedTech = [
  'aws', 'google', 'react', 'vue', 'javascript', 'python',
  'ruby', 'postgressql', 'mongodb'
];

const TechList = () => {

  const techCards = listedTech.map(tech => {
    return (
      <TechIcon
        key={tech}
        tag={tech}
      />
    );
  });

  return (
    <Fragment>
      {techCards}
    </Fragment>
  );
};

export default TechList;
