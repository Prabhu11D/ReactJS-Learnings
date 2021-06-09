import { combineReducers, createStore } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export type rootState = ReturnType<typeof rootReducer>;

export default store;
