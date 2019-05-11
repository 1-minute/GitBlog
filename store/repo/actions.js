import { createAction } from 'redux-actions';
import {
  SEARCH_INPUT_CHANGE,
  REPO_LIST_FAIL,
  REPO_LIST_SUCCESS,
  REPO_LIST_REQUESTED,
  REPO_SELECT,
} from './types';

export const searchInputChange = createAction(SEARCH_INPUT_CHANGE);
export const repoListRequest = createAction(REPO_LIST_REQUESTED);
export const repoListSuccess = createAction(REPO_LIST_SUCCESS);
export const repoListFail = createAction(REPO_LIST_FAIL);
export const repoSelect = createAction(REPO_SELECT);
