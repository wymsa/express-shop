import express, { Express } from 'express';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, () => console.log('Server running'));
