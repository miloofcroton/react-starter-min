import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const listedActivities = [
  'laptop-code', 'atom', 'calculator', 'dumbbell', 'user-ninja',
  'mountain', 'fire', 'city', 'puzzle-piece', 'football-ball'
];

const ActivityList = () => {

  const activityCards = listedActivities.map(activity => {
    return <FontAwesomeIcon key={activity} icon={activity} />;
  });

  return (
    <Fragment>
      {activityCards}
    </Fragment>
  );
};

export default ActivityList;
