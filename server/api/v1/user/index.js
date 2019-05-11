import { Router } from 'express';
import {
  getUserProfile,
  getUserIssue,
  getUserRepositories,
  saveUserRepository,
} from './index.ctrl';

const router = new Router();

router.get('/:user/profile', getUserProfile);
router.get('/:user/repos', getUserRepositories);
router.get('/:user/issues', getUserIssue);
router.post('/:user/repos', saveUserRepository);
export default router;
