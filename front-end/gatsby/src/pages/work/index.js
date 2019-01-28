import React from 'react';
import App from '../../app';
import Work from '../../components/work';
import PageHelmet from '../../styles/PageHelmet';


const WorkIndex = ({ location: { pathname } }) => {

  return (

    <App>
      <PageHelmet title='Work' />
      <Work pathname={pathname}/>
    </App>

  );

};

export default WorkIndex;
