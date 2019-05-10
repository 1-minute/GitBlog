import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import apiRouter from './api';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/v1', apiRouter);

export default app;
