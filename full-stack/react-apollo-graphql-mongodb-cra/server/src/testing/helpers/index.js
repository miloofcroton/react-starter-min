import * as usersHelpers from './users';
import * as messagesHelpers from './messages';

const apiHelpers = {
  ...usersHelpers,
  ...messagesHelpers,
};

export default apiHelpers;
