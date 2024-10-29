import { UsersService } from '@/services/users.service';
import type { Request as Req, Response as Res } from 'express';

const usersService = new UsersService();

async function getAll(req: Req, res: Res) {
  const users = await usersService.getAll();
  res.send(users);
}

export { getAll };
