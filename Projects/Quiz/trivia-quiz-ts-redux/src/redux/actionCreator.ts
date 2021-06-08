import {
  FETCH_QUESTIONS,
  SET_GAME_OVER,
  SET_INITIAL,
  SET_LOADING,
  SET_QUESTION_NUMBER,
  SET_SCORE,
  SET_USER_ANSWER,
} from './actionType';

const fetchQuestions = (data: any) => {
  return {
    type: FETCH_QUESTIONS,
    payload: data,
  };
};

const setLoading = (isLoading: boolean) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};

const setScore = (score: number) => {
  return {
    type: SET_SCORE,
    payload: score,
  };
};

const setQuestionNumber = (number: number) => {
  return {
    type: SET_QUESTION_NUMBER,
    payload: number,
  };
};

const setGameOver = (isIt: boolean) => {
  return {
    type: SET_GAME_OVER,
    payload: isIt,
  };
};

const setUserAnswer = (answer: string) => {
  return {
    type: SET_USER_ANSWER,
    payload: answer,
  };
};

const setInitialQuestion = () => {
  return {
    type: SET_INITIAL,
  };
};

const setInitialState = () => {
  return {
    type: SET_INITIAL,
  };
};

export {
  fetchQuestions,
  setLoading,
  setScore,
  setQuestionNumber,
  setGameOver,
  setUserAnswer,
  setInitialQuestion,
  setInitialState,
};
