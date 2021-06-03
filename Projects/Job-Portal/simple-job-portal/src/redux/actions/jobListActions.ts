import * as actionTypes from './actionTypes';

export function showJob(id: number | null) {
  return {
    type: actionTypes.SHOW_JOB,
    payload: id,
  };
}
