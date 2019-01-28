import React from 'react';

const Button = ({ handleClick }) => {

  return (
    <button onClick={handleClick}>Sign out</button>
  );
};

export default Button;
