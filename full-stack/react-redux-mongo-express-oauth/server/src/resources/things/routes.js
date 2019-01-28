import { Router } from 'express';
import Thing from './model';
import { checkJwt } from '../../middleware/oauth';

export default Router()

  .get('/things/:id', checkJwt, (req, res, next) => {
    const { id } = req.params;
    Thing.findById(id)
      .lean()
      .then(thing => res.json(thing))
      .catch(next);
  })

  .get('/things', checkJwt, (req, res, next) => {
    Thing.find()
      .lean()
      .then(things => res.json(things))
      .catch(next);
  })

  .post('/things', checkJwt, (req, res, next) => {
    const { title, description } = req.body;
    Thing.create({ title, description })
      .then(thing => res.json(thing))
      .catch(next);
  });
