// const { dropCollection } = require('../util/db');
import request from 'superagent';
const chance = require('chance').Chance();

const HOST = 'http://localhost:9876';

const things = [
  { title: 'abc', description: 'def' },
  { title: 'xyz', description: '123' },
  { title: 'foo', description: 'bar' }
];

Promise.all(Array.apply(null, { length: 20 })
  .map(() => ({ name: chance.name(), clearPassword: chance.word(), email: chance.email() }))
  .map(user => {
    return request
      .post(`${HOST}/api/auth/signup`)
      .send({ name: `${user.name}`, email: `${user.email}`, clearPassword: `${user.clearPassword}` })
      .then(({ body }) => body.token);
  })
)
  .then(tokens => {
    return Promise.all(tokens.map(token => {
      return Promise.all(Array.apply(null, { length: 10 })
        .map((_, i) => {
          return request
            .post(`${HOST}/api/things`)
            .set('Authorization', `Bearer ${token}`)
            .send(things[i % things.length]);
        }));
    }));
  });
