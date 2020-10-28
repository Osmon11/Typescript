import React from "react";
import "../style.css";
import { connect } from "react-redux";
import { action_9, action_6 } from "../redux/actions/actionCreators";
import question from "../img/question.png";
import answer from "../img/answer.png";
import { RootStore } from "../redux/store/store";
import { ExpenseActionTypes, Questions } from "../types/actions.types";

interface AdminProps {
  questions: Questions[];
  queUpdated: boolean;
  setQuestion: (value: Questions[]) => ExpenseActionTypes;
  setUpdated: (value: boolean) => ExpenseActionTypes;
}

interface AdminState {
  questions: Questions[];
  queUpdated: boolean;
  answer: string;
  question: string;
}

class Admin extends React.Component<AdminProps, AdminState> {
  constructor(props: AdminProps) {
    super(props);
    this.state = {
      questions: this.props.questions,
      queUpdated: this.props.queUpdated,
      answer: "",
      question: "",
    };
  }

  handlerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let ans = e.currentTarget.dataset.a;
    let que = this.state.questions.filter((item) => {
      return item.ans !== ans;
    });
    this.props.setQuestion(que);
    this.props.setUpdated(true);
  };

  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newQuestion = this.state.questions;
    newQuestion.unshift({ ans: answer, que: question });
    this.props.setQuestion(newQuestion);
    this.props.setUpdated(true);
  };

  componentDidUpdate(prevProps: AdminProps) {
    if (prevProps.queUpdated !== this.props.queUpdated) {
      this.setState({ questions: this.props.questions });
      this.props.setUpdated(false);
    }
  }
  render() {
    let questions = this.state.questions;
    return (
      <div className='admin'>
        <div className='admin_box'>
          <form onSubmit={this.submitHandler}>
            <div className='inputBx'>
              <input
                type='text'
                placeholder='New question'
                name='question'
                onChange={(e) => this.setState({ question: e.target.value })}
              />
              <img src={question} alt='icon-question' />
            </div>
            <div className='inputBx'>
              <input
                type='text'
                placeholder='Answer'
                name='answer'
                onChange={(e) => this.setState({ answer: e.target.value })}
              />
              <img src={answer} alt='icon-answer' />
            </div>
            <div className='inputBx'>
              <input type='submit' value='Save' />
            </div>
          </form>
        </div>
        {questions.map((q: { ans: string; que: string }, i: number) => {
          return (
            <div className='admin_box' key={q.ans + i}>
              <div className='question_block'>
                <div className='question'>
                  <span>
                    <strong>
                      Question-<strong style={{ color: "red" }}>{i}</strong>:
                    </strong>{" "}
                    {q.que}
                  </span>
                </div>
                <div className='answer'>
                  <span>
                    <strong>Answer:</strong> {q.ans}
                  </span>
                </div>
              </div>
              <div
                className='cart-close'
                onClick={this.handlerClick}
                data-a={q.ans}
              ></div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: RootStore) => {
  return {
    questions: state.reducer.questions,
    queUpdated: state.reducer.queUpdated,
  };
};
const mapDispatchToProps = {
  setQuestion: action_6,
  setUpdated: action_9,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
