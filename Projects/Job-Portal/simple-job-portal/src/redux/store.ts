import { createStore } from 'redux';
import { job } from './data/Jobs';
import { state as jobPortal } from './reducers/jobPortalReducer';
import { state as jobDetail } from './reducers/jobDetailReducer';
import reducer from './reducers';

export interface rootState {
  joblist: job[];
  jobportal: jobPortal;
  jobdetail: jobDetail;
}

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
