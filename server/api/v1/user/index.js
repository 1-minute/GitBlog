import { Router } from 'express';
import { getUserProfile } from './index.ctrl';

const router = new Router();

router.get('/profile', getUserProfile);

export default router;
