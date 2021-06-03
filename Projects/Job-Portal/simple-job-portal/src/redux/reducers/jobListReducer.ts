import { job, jobs } from '../data/Jobs';
import * as actionTypes from '../actions/actionTypes';

interface actionJobList {
  type: string;
}

const jobListReducer = (state: job[] = jobs, action: actionJobList): job[] => {
  switch (action.type) {
    case actionTypes.GET_JOBS_LIST:
      return state;
    default:
      return state;
  }
};

export default jobListReducer;
