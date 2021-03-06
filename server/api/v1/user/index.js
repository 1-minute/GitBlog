import { Router } from 'express';
import {
  getUserProfile,
  getUserIssue,
  getUserRepositories,
  saveUserRepository,
  aboutReadMe,
  getUserGist,
  getSingleIssue,
} from './index.ctrl';

const router = new Router();

router.get('/:user/profile', getUserProfile);
router.get('/:user/repos', getUserRepositories);
router.get('/:user/issues', getUserIssue);
router.post('/:user/repos', saveUserRepository);
router.get(`/:user/about`, aboutReadMe);
router.get(`/:user/gist`, getUserGist);
router.get(`/:user/issue/:num`, getSingleIssue);

export default router;
