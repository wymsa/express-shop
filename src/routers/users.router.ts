import type { Router } from 'express';
import { getAll } from '@/controllers/users.controller';

export default (router: Router) => {
  router.get('/users', getAll);
};
