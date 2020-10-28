import React, { Component } from "react";
import Content from "../components/content";
import "../style.css";
import {
  action_2,
  action_3,
  action_4,
  action_5,
  action_6,
  action_8,
} from "../redux/actions/actionCreators";
import { connect } from "react-redux";
import { RootStore } from "../redux/store/store";
import { reload } from "../redux/reducers/appReducer";
import { ExpenseActionTypes, Questions } from "../types/actions.types";

interface GameProps {
  questions: Questions[];
  isNext: boolean;
  setQue: (value: string) => ExpenseActionTypes;
  setAns: (value: string) => ExpenseActionTypes;
  setArr: (value: string[]) => ExpenseActionTypes;
  setState: (value: Questions[]) => ExpenseActionTypes;
  setNext: (value: boolean) => ExpenseActionTypes;
  setQuestions: (value: Questions[]) => ExpenseActionTypes;
}

class Game extends Component<GameProps> {
  constructor(props: GameProps) {
    super(props);
    this.startGame();
  }

  startGame() {
    let num = Math.floor(Math.random() * this.props.questions.length);
    let question = this.props.questions[num];
    let { ans, que } = question;
    let arr = ans.toLowerCase().split("");
    this.props.setQue(que);
    this.props.setAns(ans);
    this.props.setArr(arr);
    let newArr = this.props.questions.filter((item) => {
      return item.ans !== ans;
    });
    this.props.setState(newArr);
  }

  componentDidUpdate(prevProps: GameProps) {
    if (prevProps.isNext !== this.props.isNext) {
      this.startGame();
      this.props.setNext(false);
    }
    if (this.props.questions.length === 1) {
      this.props.setState(reload);
      this.startGame();
    }
  }

  render() {
    return (
      <div className='game-box'>
        <Content />
      </div>
    );
  }
}

const mapStateToProps = (state: RootStore) => {
  return {
    questions: state.reducer.questions,
    isNext: state.reducer.isNext,
  };
};
const mapDispatchToProps = {
  setQue: action_3,
  setAns: action_4,
  setArr: action_5,
  setState: action_6,
  setNext: action_8,
  setQuestions: action_2,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
