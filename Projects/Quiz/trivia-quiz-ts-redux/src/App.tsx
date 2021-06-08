import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';
import QuestionCard from './components/QuestionCard';
import {
  fetchQuestions,
  setLoading,
  setScore,
  setQuestionNumber,
  setGameOver,
  setUserAnswer,
  setInitialQuestion,
  setInitialState,
} from './redux/actionCreator';
import { question } from './redux/actionReducer/questionReducer';
import { rootReducer } from './redux/actionReducer/reducer';

class App extends Component<Props> {
  shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

  setQuestions = async () => {
    this.props.setLoading(true);
    const res = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'
    );
    const data = (await res.json()).results;
    const bank = data.map((item: any) => {
      return {
        question: item.question,
        correct_answer: item.correct_answer,
        incorrect_answers: item.incorrect_answers,
        answers: this.shuffleArray([
          ...item.incorrect_answers,
          item.correct_answer,
        ]),
      };
    });
    this.props.fetchQuestions(bank);
    this.props.setLoading(false);
    this.props.setGameOver(false);
  };

  handleAnswer = (answer: string) => {
    const { number, score, questionBank, setUserAnswer, setScore } = this.props;

    setUserAnswer(answer);
    if (answer === questionBank[number].correct_answer) {
      setScore(score + 1);
    }
  };

  nextQuestion = () => {
    const { number, setQuestionNumber } = this.props;
    setQuestionNumber(number + 1);
  };

  restart = () => {
    this.props.setAll();
    this.props.setState();
  };

  render() {
    const { gameOver, loading, number, score, questionBank, userAnswer } =
      this.props;

    // console.log(typeof questionBank[0]);

    return (
      <div className="App">
        <div className="header">React Trivia Quiz</div>
        {loading ? <div className="loading"></div> : null}
        {gameOver ? (
          <button className="start" onClick={this.setQuestions}>
            Start Quiz
          </button>
        ) : (
          <div className="container">
            <div className="score">
              Score : <span>{score}</span>
            </div>
            <div className="questionNumber">{`Question ${number + 1}/10`}</div>
            <div className="question-container">
              <QuestionCard
                question={questionBank[number]}
                answer={userAnswer[number]}
                options={questionBank[number].answers}
                callback={this.handleAnswer}
              />
              {userAnswer[number] && number < 9 ? (
                <button className="btn" onClick={this.nextQuestion}>
                  Next
                </button>
              ) : null}
              {userAnswer[9] ? (
                <button className="btn done" onClick={this.restart}>
                  Done
                </button>
              ) : null}
            </div>
          </div>
        )}
      </div>
    );
  }
}

interface Props {
  loading: boolean;
  setLoading: (isloading: boolean) => void;
  gameOver: boolean;
  setGameOver: (isIt: boolean) => void;
  score: number;
  setScore: (score: number) => void;
  questionBank: question[];
  fetchQuestions: (data: any) => void;
  number: number;
  setQuestionNumber: (number: number) => void;
  userAnswer: string[];
  setUserAnswer: (answer: string) => void;
  setAll: () => void;
  setState: () => void;
}

const mapState = (state: rootReducer) => {
  return {
    loading: state.action.loading,
    gameOver: state.action.gameOver,
    questionBank: state.questions.questionBank,
    score: state.questions.score,
    number: state.questions.questionNumber,
    userAnswer: state.questions.userAnswer,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    fetchQuestions: (data: any) => dispatch(fetchQuestions(data)),
    setLoading: (isloading: boolean) => dispatch(setLoading(isloading)),
    setScore: (score: number) => dispatch(setScore(score)),
    setQuestionNumber: (number: number) => dispatch(setQuestionNumber(number)),
    setGameOver: (isIt: boolean) => dispatch(setGameOver(isIt)),
    setUserAnswer: (answer: string) => dispatch(setUserAnswer(answer)),
    setAll: () => dispatch(setInitialQuestion()),
    setState: () => dispatch(setInitialState()),
  };
};

export default connect(mapState, mapDispatch)(App);
