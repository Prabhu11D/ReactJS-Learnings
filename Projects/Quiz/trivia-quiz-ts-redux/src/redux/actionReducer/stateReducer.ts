import { SET_LOADING, SET_GAME_OVER, SET_INITIAL } from '../actionType';

export interface stateUI {
  loading: boolean;
  gameOver: boolean;
}

export const initialState: stateUI = {
  loading: false,
  gameOver: true,
};

const stateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_GAME_OVER:
      return {
        ...state,
        gameOver: action.payload,
      };
    case SET_INITIAL:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default stateReducer;
