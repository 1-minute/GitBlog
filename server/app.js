import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import apiRouter from './api';
import passport from 'passport';
import passportConfig from './lib/github';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
passportConfig(app, passport);
app.use('/api/v1', apiRouter);

export default app;
