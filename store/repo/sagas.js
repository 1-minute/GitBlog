import { put, call, takeLatest } from 'redux-saga/effects';
import { REPO_LIST_REQUESTED } from './types';
import { repoListFail, repoListSuccess } from './actions';
import axios from 'axios';

function* fetchUserRepositories({ payload }) {
  try {
    const { data } = yield call(axios.get, `/api/v1/users/${payload}/repos`);
    yield put(repoListSuccess(data));
  } catch (err) {
    yield put(repoListFail());
  }
}

function* takeUserList() {
  yield takeLatest(REPO_LIST_REQUESTED, fetchUserRepositories);
}
export default [takeUserList()];
