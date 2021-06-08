import React, { Component } from 'react';
import { question } from '../redux/actionReducer/questionReducer';

interface Props {
  question: question;
  answer: string | undefined;
  options: string[];
  callback: (option: string) => void;
}

class QuestionCard extends Component<Props> {
  render() {
    const { question, callback, answer, options } = this.props;
    return (
      <>
        <div className="question">{question.question}</div>
        <div>
          {options.map((option, index) => (
            <button
              className={
                answer === option
                  ? question.correct_answer === answer
                    ? 'correct'
                    : 'wrong'
                  : answer
                  ? question.correct_answer === option
                    ? 'correct'
                    : ''
                  : ''
              }
              key={index}
              disabled={answer ? true : false}
              onClick={() => callback(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </>
    );
  }
}

export default QuestionCard;
