import * as actionTypes from '../actions/actionTypes';

export interface state {
  apply: boolean;
  appliedJobId: number[];
  user: {
    firstname: string;
    lastname: string;
    email: string;
    aboutme: string;
  };
}

interface action {
  type: string;
  payload: any;
}

const initialState: state = {
  apply: false,
  appliedJobId: [],
  user: {
    firstname: '',
    lastname: '',
    email: '',
    aboutme: '',
  },
};

const jobDetailReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case actionTypes.APPLY_JOB:
      return {
        ...state,
        apply: action.payload,
      };
    case actionTypes.APPLY_JOB_ID:
      return {
        ...state,
        appliedJobId: [...state.appliedJobId, action.payload],
      };
    case actionTypes.ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default jobDetailReducer;
