import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as repo from './repo';

const initialState = {
  repo: repo.initialState,
};

const rootReducer = combineReducers({
  repo: repo.reducers,
});

function* rootSaga() {
  yield all([...repo.sagas]);
}

const sagaMiddleware = createSagaMiddleware();

export function initializeStore(state = initialState) {
  const store = createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
