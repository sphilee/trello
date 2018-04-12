import {put, takeEvery, all, call} from 'redux-saga/effects'
import * as WebAPI from 'lib/web-api';
import * as actions from 'modules/list';

function * createList({payload}) {
  yield call(WebAPI.createList, payload);
}

function * initialList() {
  const {data} = yield call(WebAPI.getInitialList);
  yield put({type: actions.SET_INITIAL_LIST, data});
}

function * recentList({payload}) {
  const {data} = yield call(WebAPI.getRecentList, payload);
  yield put({type: actions.SET_RECENT_LIST, data});
}

function * updateList({payload}) {
  const {data} = yield call(WebAPI.updateList, payload);
  yield put({type: actions.SET_UPDATE_LIST, data});
}

function * deleteList({payload}) {
  yield call(WebAPI.deleteList, payload);
  yield put({type: actions.SET_DELETE_LIST, id: payload});
}

export default function * root() {
  yield all([
    takeEvery(actions.CREATE_LIST, createList),
    takeEvery(actions.GET_INITIAL_LIST, initialList),
    takeEvery(actions.GET_RECENT_LIST, recentList),
    takeEvery(actions.UPDATE_LIST, updateList),
    takeEvery(actions.DELETE_LIST, deleteList)
  ]);
}