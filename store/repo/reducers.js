import initialState from './initialState';
import { handleActions } from 'redux-actions';
import {
  SEARCH_INPUT_CHANGE,
  REPO_LIST_SUCCESS,
  REPO_SELECT,
  FILTER_REPO_LIST,
} from './types';
import produce from 'immer';

export default handleActions(
  {
    [SEARCH_INPUT_CHANGE]: produce((draft, action) => {
      draft.repoSearchInput = action.payload;
    }),
    [REPO_LIST_SUCCESS]: produce((draft, action) => {
      draft.repoList = action.payload;
      draft.originalList = action.payload;
    }),
    [REPO_SELECT]: produce((draft, action) => {
      draft.selectedRepo = action.payload;
    }),
    [FILTER_REPO_LIST]: produce((draft, action) => {
      draft.repoList = draft.originalList.filter((repo) => {
        return repo.name.toLowerCase().search(action.payload) !== -1;
      });
    }),
  },
  initialState,
);
