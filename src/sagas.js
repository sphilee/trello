import {fork, put, take, call, all} from 'redux-saga/effects'
import * as WebAPI from 'lib/web-api';
import * as actions from 'modules/list';

function * watchCreateList() {
  while (true) {
    const {payload} = yield take(actions.CREATE_LIST);
    yield call(WebAPI.createList, payload);
  }
}

function * watchInitialList() {
  while (true) {
    yield take(actions.GET_INITIAL_LIST);
    const {data} = yield call(WebAPI.getInitialList);
    yield put({type: actions.SET_INITIAL_LIST, data})
  }
}

function * watchRecentList() {
  while (true) {
    const {payload} = yield take(actions.GET_RECENT_LIST);
    const {data} = yield call(WebAPI.getRecentList, payload);
    yield put({type: actions.SET_RECENT_LIST, data})
  }
}

function * watchUpdateList() {
  while (true) {
    const {payload} = yield take(actions.UPDATE_LIST);
    const {data} = yield call(WebAPI.updateList, payload);
    yield put({type: actions.SET_UPDATE_LIST, data})
  }
}

function * watchDeleteList() {
  while (true) {
    const {payload} = yield take(actions.DELETE_LIST);
    yield call(WebAPI.deleteList, payload);
    yield put({type: actions.SET_DELETE_LIST, id: payload})
  }
}

export default function * root() {
  yield all([fork(watchInitialList), fork(watchRecentList), fork(watchUpdateList), fork(watchCreateList), fork(watchDeleteList)])
}