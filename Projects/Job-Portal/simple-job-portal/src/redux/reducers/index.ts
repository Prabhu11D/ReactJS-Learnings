import jobListReducer from './jobListReducer';
import jobPortalReducer from './jobPortalReducer';
import jobDetailReducer from './jobDetailReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  joblist: jobListReducer,
  jobportal: jobPortalReducer,
  jobdetail: jobDetailReducer,
});
