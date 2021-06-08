import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import stateReducer from './stateReducer';
import { stateUI } from './stateReducer';
import { questions } from './questionReducer';

const reducer = combineReducers({
  questions: questionReducer,
  action: stateReducer,
});

export type rootReducer = {
  questions: questions;
  action: stateUI;
};

export default reducer;
