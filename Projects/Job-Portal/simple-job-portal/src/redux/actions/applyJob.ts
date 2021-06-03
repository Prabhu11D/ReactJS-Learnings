import * as actionTypes from './actionTypes';

export function applyJobID(id: number) {
  return {
    type: actionTypes.APPLY_JOB_ID,
    payload: id,
  };
}

export interface user {
  firstname: string;
  lastname: string;
  email: string;
  aboutme: string;
}

export function addUser(user: user) {
  return {
    type: actionTypes.ADD_USER,
    payload: user,
  };
}
