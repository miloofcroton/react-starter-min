import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faLaptopCode, faAtom, faCalculator, faDumbbell,
  faUserNinja, faMountain, faFire, faCity, faPuzzlePiece,
  faFootballBall, faAddressBook, faEnvelope, faKey,
  faIgloo
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub, faLinkedin, faTwitter
} from '@fortawesome/free-brands-svg-icons';

const icons = [
  faLaptopCode, faAtom, faCalculator, faDumbbell,
  faUserNinja, faMountain, faFire, faCity, faPuzzlePiece,
  faFootballBall, faAddressBook, faEnvelope, faKey,
  faGithub, faLinkedin, faTwitter,
  faIgloo
];

const addIcons = () => library.add(...icons);

export default addIcons;
