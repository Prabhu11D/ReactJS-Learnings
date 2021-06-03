import * as actionTypes from '../actions/actionTypes';

export interface state {
  title: string;
  showFilteredJob: boolean;
  showJob: number | null;
}

interface action {
  type: string;
  payload: any;
}

const initialState: state = {
  title: '',
  showFilteredJob: false,
  showJob: null,
};

const jobPortalReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case actionTypes.SHOW_JOB:
      return {
        ...state,
        showJob: action.payload,
      };
    case actionTypes.SET_JOB_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case actionTypes.SHOW_FILTERED_JOB:
      return {
        ...state,
        showFilteredJob: action.payload,
      };
    default:
      return state;
  }
};

export default jobPortalReducer;
