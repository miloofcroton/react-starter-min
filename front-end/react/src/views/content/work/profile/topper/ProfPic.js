import React from 'react';
import styled from 'styled-components';

const PicWrapper = styled.div`

    width: 180px;
    max-width: 230px;
    height: 180px;
    background-size: cover;
    background-image: url(/src/assets/work/me-v1.png);
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 50%;
    overflow: hidden;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    filter: gray;
    transition: all .6s ease;
    -webkit-transition: all .6s ease;
    margin-bottom: 40px;

    &:hover {
      filter: grayscale(0%);
      -webkit-filter: grayscale(0%);
    }
`;

const ProfPic = () => {

  return (
    <PicWrapper></PicWrapper>
  );
};

export default ProfPic;
