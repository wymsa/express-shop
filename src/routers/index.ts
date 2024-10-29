import { Router } from 'express';
import usersRouter from '@/routers/users.router';

const router = Router();

export default () => {
  usersRouter(router);
  return router;
};
