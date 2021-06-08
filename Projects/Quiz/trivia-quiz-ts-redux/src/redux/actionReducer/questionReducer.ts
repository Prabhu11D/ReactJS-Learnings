import {
  FETCH_QUESTIONS,
  SET_SCORE,
  SET_QUESTION_NUMBER,
  SET_USER_ANSWER,
  SET_INITIAL,
} from '../actionType';

export interface question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
}

export interface questions {
  questionBank: question[];
  score: number;
  questionNumber: number;
  userAnswer: string[];
}

export const initialState: questions = {
  questionBank: [],
  score: 0,
  questionNumber: 0,
  userAnswer: [],
};

const questionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        questionBank: [...action.payload],
      };
    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case SET_QUESTION_NUMBER:
      return {
        ...state,
        questionNumber: action.payload,
      };
    case SET_USER_ANSWER:
      return {
        ...state,
        userAnswer: [...state.userAnswer, action.payload],
      };
    case SET_INITIAL:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default questionReducer;
