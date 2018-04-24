import {put, takeEvery, all, call} from 'redux-saga/effects'
import * as WebAPI from 'lib/web-api';
import * as listActions from 'modules/list';
import * as cardActions from 'modules/card';

function * createList({payload}) {
  yield call(WebAPI.createList, payload);
}

function * createCard({payload}) {
  yield call(WebAPI.createCard, payload);
}

function * initialList() {
  const {data} = yield call(WebAPI.getInitialList);
  yield put({type: listActions.SET_INITIAL_LIST, data});
}

function * initialCard() {
  const {data} = yield call(WebAPI.getInitialCard);
  yield put({type: cardActions.SET_INITIAL_CARD, data});
}

function * recentList({payload}) {
  const {data} = yield call(WebAPI.getRecentList, payload);
  yield put({type: listActions.SET_RECENT_LIST, data});
}

function * recentCard({payload}) {
  const {data} = yield call(WebAPI.getRecentCard, payload);
  yield put({type: cardActions.SET_RECENT_CARD, data});
}

function * updateList({payload}) {
  const {data} = yield call(WebAPI.updateList, payload);
  yield put({type: listActions.SET_UPDATE_LIST, data});
}

function * deleteList({payload}) {
  yield call(WebAPI.deleteList, payload);
  yield put({type: listActions.SET_DELETE_LIST, id: payload});
}

function * deleteCard({payload}) {
  yield call(WebAPI.deleteCard, payload);
  yield put({type: cardActions.SET_DELETE_CARD, id: payload});
}

export default function * root() {
  yield all([
    takeEvery(listActions.CREATE_LIST, createList),
    takeEvery(listActions.GET_INITIAL_LIST, initialList),
    takeEvery(listActions.GET_RECENT_LIST, recentList),
    takeEvery(listActions.GET_UPDATE_LIST, updateList),
    takeEvery(listActions.GET_DELETE_LIST, deleteList),
    takeEvery(cardActions.CREATE_CARD, createCard),
    takeEvery(cardActions.GET_INITIAL_CARD, initialCard),
    takeEvery(cardActions.GET_RECENT_CARD, recentCard),
    takeEvery(cardActions.GET_DELETE_CARD, deleteCard),
  ]);
}