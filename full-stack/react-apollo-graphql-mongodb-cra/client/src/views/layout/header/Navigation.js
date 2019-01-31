import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes';
import SignOutButton from '../../lib/session/SignOut';

const Navigation = ({ session }) => (
  <div>
    {session && session.me ? (
      <NavigationAuth session={session} />
    ) : (
      <NavigationNonAuth />
    )}
  </div>
);

const NavigationAuth = ({ session }) => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING.linkTo()}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT.linkTo()}>Account ({session.me.username})</Link>
    </li>
    {session &&
      session.me &&
      session.me.role === 'ADMIN' && (
      <li>
        <Link to={ROUTES.ADMIN.linkTo()}>Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN.linkTo()}>Sign In</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING.linkTo()}>Landing</Link>
    </li>
  </ul>
);

export default Navigation;
