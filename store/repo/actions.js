import { createAction } from 'redux-actions';
import {
  SEARCH_INPUT_CHANGE,
  REPO_LIST_FAIL,
  REPO_LIST_SUCCESS,
  REPO_LIST_REQUESTED,
  REPO_SELECT,
  FILTER_REPO_LIST,
  SAVE_REPO_REQUESTED,
  SAVE_REPO_SUCCESS,
  SAVE_REPO_FAIL,
} from './types';

export const searchInputChange = createAction(SEARCH_INPUT_CHANGE);
export const repoListRequest = createAction(REPO_LIST_REQUESTED);
export const repoListSuccess = createAction(REPO_LIST_SUCCESS);
export const repoListFail = createAction(REPO_LIST_FAIL);
export const repoSelect = createAction(REPO_SELECT);
export const filterRepoList = createAction(FILTER_REPO_LIST);

export const saveRepoRequest = createAction(SAVE_REPO_REQUESTED);
export const saveRepoSuccess = createAction(SAVE_REPO_SUCCESS);
export const saveRepoFail = createAction(SAVE_REPO_FAIL);
