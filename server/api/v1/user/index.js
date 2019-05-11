import { Router } from 'express';
import {
  getUserProfile,
  getUserIssue,
  getUserRepositories,
  saveUserRepository,
  aboutReadMe,
} from './index.ctrl';

const router = new Router();

router.get('/:user/profile', getUserProfile);
router.get('/:user/repos', getUserRepositories);
router.get('/:user/issues', getUserIssue);
router.post('/:user/repos', saveUserRepository);
router.get(`/:user/about`, aboutReadMe);

export default router;
