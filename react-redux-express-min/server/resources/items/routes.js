import { Router } from 'express';
import Item from './model';
// import requireAuth from '../../middleware/requireAuth';

export default Router()
  .post('/polls/:id/items', requireAuth, (req, res, next) => {
    const { poll, selection } = req.body;
    Item.create({ poll, selection })
      .then(vote => res.json(vote))
      .catch(next);
  })

  .get('/polls/:id/results', (req, res, next) => {
    const { id } = req.params;
    Poll.findById(id)
      .then(poll => poll.results())
      .then(results => res.json(results))
      .catch(next);
  });
