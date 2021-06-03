import * as actionTypes from './actionTypes';

export function applyJob(yes: boolean) {
  return {
    type: actionTypes.APPLY_JOB,
    payload: yes,
  };
}
