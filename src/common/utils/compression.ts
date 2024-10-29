import type { Request as Req, Response as Res } from 'express';
import compression from 'compression';

function shouldCompress(req: Req, res: Res) {
  if (req.headers['x-no-compression']) return false;

  return compression.filter(req, res);
}

export { shouldCompress };
