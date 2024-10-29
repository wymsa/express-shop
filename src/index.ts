import 'dotenv/config';
import 'reflect-metadata';
import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import DataSource from '@/config/data-source';
import { shouldCompress } from '@/utils/index';

async function run() {
  const app: Express = express();

  app.use(cors({ credentials: true }));
  app.use(cookieParser());
  app.use(compression({ filter: shouldCompress }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  DataSource.initialize()
    .then(() => {
      console.log('Connected to database');
      app.listen(Number(process.env.PORT), () => {
        console.log(`Server running on port ${process.env.PORT}`);
      });
    })
    .catch((err) => console.error(`Application running error: ${err.message}`));
}

run();
