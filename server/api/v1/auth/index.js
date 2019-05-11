import { Router } from 'express';
import * as authCtrl from './index.ctrl';
import passport from 'passport';

const router = new Router();

router.get('/github', passport.authenticate('github'), authCtrl.login);
router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  authCtrl.login,
);
router.get('/logout', authCtrl.logout);

export default router;
