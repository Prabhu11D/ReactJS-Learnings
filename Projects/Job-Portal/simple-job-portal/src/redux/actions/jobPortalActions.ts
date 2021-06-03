import * as actionTypes from './actionTypes';

export function setJobTitle(title: string) {
  return {
    type: actionTypes.SET_JOB_TITLE,
    payload: title,
  };
}

export function showFilteredJob(show: boolean) {
  return {
    type: actionTypes.SHOW_FILTERED_JOB,
    payload: show,
  };
}