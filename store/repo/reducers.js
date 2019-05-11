import initialState from './initialState';
import { handleActions } from 'redux-actions';
import { SEARCH_INPUT_CHANGE, REPO_LIST_SUCCESS, REPO_SELECT } from './types';
import produce from 'immer';

export default handleActions(
  {
    [SEARCH_INPUT_CHANGE]: produce((draft, action) => {
      draft.repoSearchInput = action.payload;
    }),
    [REPO_LIST_SUCCESS]: produce((draft, action) => {
      draft.repoList = action.payload;
    }),
    [REPO_SELECT]: produce((draft, action) => {
      draft.selectedRepo = action.payload;
    }),
  },
  initialState,
);
