import { Router } from 'express';
import {
  getUserProfile,
  getUserIssue,
  getUserRepositories,
} from './index.ctrl';

const router = new Router();

router.get('/:user/profile', getUserProfile);
router.get('/:user/repos', getUserRepositories);
router.get('/:owner/issues', getUserIssue);

export default router;
