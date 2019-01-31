import React from 'react';

const Button = ({ handleClick }) => {

  return (
    <button onClick={handleClick}>Sign in</button>
  );
};

export default Button;
