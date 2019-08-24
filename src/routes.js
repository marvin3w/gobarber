import { Router } from 'express';
// import { async } from 'rxjs/internal/scheduler/async';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Marcus Oliveira',
    email: 'marvin.3w@gmail.com',
    password_hash: '123456',
  });
  return res.json(user);
});

export default routes;
