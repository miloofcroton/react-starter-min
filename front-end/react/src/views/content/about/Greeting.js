import React from 'react';
import Typed from 'react-typed';

const GREETINGS = [
  'Hello',
  'Hola',
  'Bonjour',
  'Ciao',
  'Namaste',
  'Salaam',
  'Guten tag',
  'Bună ziua'
];

const Greeting = () => {
  return (
    <Typed
      loop
      typeSpeed={150}
      backSpeed={75}
      strings={GREETINGS}
      smartBackspace
      shuffle={false}
      backDelay={2000}
      fadeOut={false}
      fadeOutDelay={100}
      loopCount={0}
      showCursor
      cursorChar="|"
    />
  );
};

export default Greeting;
