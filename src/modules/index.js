import { combineReducers } from 'redux';
import list from './list';
import card from './card';
import ui from './ui';

export default combineReducers({
    list,
    card,
    ui
});