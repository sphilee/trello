import {handleActions, createAction} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';

export const CREATE_CARD = 'card/CREATE_CARD';
export const GET_INITIAL_CARD = 'card/GET_INITIAL_CARD';
export const GET_RECENT_CARD = 'card/GET_RECENT_CARD';
export const GET_UPDATE_CARD = 'card/GET_UPDATE_CARD';
export const GET_DELETE_CARD = 'card/GET_DELETE_CARD';

export const SET_INITIAL_CARD = 'card/SET_INITIAL_CARD';
export const SET_RECENT_CARD = 'card/SET_RECENT_CARD';
export const SET_UPDATE_CARD = 'card/SET_UPDATE_CARD';
export const SET_DELETE_CARD = 'card/SET_DELETE_CARD';
export const SET_DELETE_CARDS = 'card/SET_DELETE_CARDS';

export const createCard = createAction(CREATE_CARD); 
export const getInitialCard = createAction(GET_INITIAL_CARD);
export const getRecentCard = createAction(GET_RECENT_CARD);
export const updateCard = createAction(GET_UPDATE_CARD); 
export const deleteCard = createAction(GET_DELETE_CARD);

const initialState = Map({data: List()});

export default handleActions({
    [SET_INITIAL_CARD]: (state, {data}) => state.set('data', fromJS(data)),
    [SET_RECENT_CARD]: (state, {data}) => state.set('data', state.get('data').concat(fromJS(data))),
    [SET_UPDATE_CARD]: (state, {data: {id, title}}) => {
        const index = state.get('data').findIndex(card => card.get('id') === id);
        return state.updateIn(['data', index], (card) => card.merge({title}))},
    [SET_DELETE_CARD]: (state, {id}) => {
        const index = state.get('data').findIndex(card => card.get('id') === id);
        return state.deleteIn(['data', index]);
    },
    [SET_DELETE_CARDS]: (state, {id}) => {
        const filtered = state.get('data').filterNot(card => card.get('listId') === id);
        return state.set('data', filtered);
    }
}, initialState);