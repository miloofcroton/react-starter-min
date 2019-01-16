import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TileCardWrapper = styled.div`

  margin: 10px;
  border: 1px solid black;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  height: 100%;

  a {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 50px;

    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
      z-index: -1;
    }

    span {
      display: none;
      color: black;
    }

    &:hover {
      img {
        opacity: 0.5;
      }
      span {
        display: inline-block;
      }
    }

  }

`;


const TileCard = ({ details }) => {
  return (
    <TileCardWrapper>
      <Link to={details.to}>
        <img src={details.src} alt={details.alt} />
        <span>{details.text}</span>
      </Link>
    </TileCardWrapper>
  );
};


TileCard.propTypes = {
  linkDetails: PropTypes.object
};

export default TileCard;
