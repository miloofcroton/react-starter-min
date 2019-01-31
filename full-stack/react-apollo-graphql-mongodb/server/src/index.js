import 'dotenv/config';
import { connectDb } from './services/mongo';
import httpServer from './app';

const isTest = !!process.env.TEST_DATABASE_URL;
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 8000;

import {
  models,
} from './resources';

import { createUsersWithMessages } from './tests/scripts/users-messages';

connectDb().then(async () => {
  if (isTest || isProduction) {
    // reset database
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);

    createUsersWithMessages(new Date());
  }

  httpServer.listen({ port }, () => {
    console.log(`🚀 Server on http://localhost:${port}/graphql`);
  });
});
