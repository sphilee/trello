import {handleActions, createAction} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';

export const CREATE_LIST = 'list/CREATE_LIST';
export const GET_INITIAL_LIST = 'list/GET_INITIAL_LIST';
export const GET_RECENT_LIST = 'list/GET_RECENT_LIST';
export const GET_UPDATE_LIST = 'list/GET_UPDATE_LIST';
export const GET_DELETE_LIST = 'list/GET_DELETE_LIST';

export const SET_INITIAL_LIST = 'list/SET_INITIAL_LIST';
export const SET_RECENT_LIST = 'list/SET_RECENT_LIST';
export const SET_UPDATE_LIST = 'list/SET_UPDATE_LIST';
export const SET_DELETE_LIST = 'list/SET_DELETE_LIST';

export const createList = createAction(CREATE_LIST); 
export const getInitialList = createAction(GET_INITIAL_LIST);
export const getRecentList = createAction(GET_RECENT_LIST);
export const updateList = createAction(GET_UPDATE_LIST); 
export const deleteList = createAction(GET_DELETE_LIST);

const initialState = Map({data: List()});

export default handleActions({
    [SET_INITIAL_LIST]: (state, {data}) => state.set('data', fromJS(data)),
    [SET_RECENT_LIST]: (state, {data}) => state.set('data', state.get('data').concat(fromJS(data))),
    [SET_UPDATE_LIST]: (state, {data: {id, title}}) => {
        const index = state.get('data').findIndex(list => list.get('id') === id);
        return state.updateIn(['data', index], (list) => list.merge({title}))},
    [SET_DELETE_LIST]: (state, {id}) => {
        const index = state.get('data').findIndex(list => list.get('id') === id);
        return state.deleteIn(['data', index]);
    }
}, initialState);