import { put, call, takeLatest } from 'redux-saga/effects';
import { REPO_LIST_REQUESTED, SAVE_REPO_REQUESTED } from './types';
import {
  repoListFail,
  repoListSuccess,
  saveRepoSuccess,
  saveRepoFail,
} from './actions';
import axios from 'axios';

function* fetchUserRepositories({ payload }) {
  try {
    const { data } = yield call(axios.get, `/api/v1/users/${payload}/repos`);
    yield put(repoListSuccess(data));
  } catch (err) {
    yield put(repoListFail());
  }
}

function* saveUserRepository({ payload }) {
  const { user, repo, callback } = payload;
  try {
    yield call(axios.post, `/api/v1/users/${user}/repos`, {
      repo,
    });
    callback();

    yield put(saveRepoSuccess());
  } catch (err) {
    yield put(saveRepoFail());
  }
}

function* takeUserList() {
  yield takeLatest(REPO_LIST_REQUESTED, fetchUserRepositories);
}

function* takeSaveUserRepo() {
  yield takeLatest(SAVE_REPO_REQUESTED, saveUserRepository);
}

export default [takeUserList(), takeSaveUserRepo()];
