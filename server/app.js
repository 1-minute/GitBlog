import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import apiRouter from './api';
import passport from 'passport';
import passportConfig from './lib/github';
import dotenv from 'dotenv';
import path from 'path';

const app = express();

dotenv.config({
  path: path.join(__dirname, `./.env.${process.env.NODE_ENV || 'development'}`),
});
app.use(morgan('dev'));

app.use(bodyParser.json());
passportConfig(app, passport);
app.use('/api/v1', apiRouter);

export default app;
