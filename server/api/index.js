import { Router } from 'express';
import userRouter from './v1/user';

const router = new Router();

router.use('/users', userRouter);

export default router;
