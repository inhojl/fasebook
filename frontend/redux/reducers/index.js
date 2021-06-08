import { combineReducers } from 'redux';
import entities from './entities'
import session from './session_reducer';
import errors from './errors';
import ui from './ui_reducer';

export default combineReducers({
  entities,
  session,
  errors,
  ui
})