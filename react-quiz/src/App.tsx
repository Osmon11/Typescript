import React, { useState } from "react";
import { QuestionState, Difficulty, fetchQuizQuestions } from "./API";
import QuestionCard from "./component/questionCard";
//Styles
import { createGlobalStyle } from "styled-components";
import { Wrapper } from "./App.styles";

const BGImg = require("./img/bgimage.jpg");

export const GlobalStyle = createGlobalStyle`
html{
  height: 100%;
}

body {
  background-image: url(${BGImg});
  background-size: cover;
  background-position: center center;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

*{
  box-sizing: border-box;
  font-family: 'Catamaran', sans-serif;
}
`;

export interface AnswerObj {
  question: string;
  answer: string;
  correct: boolean;
  correctAns: string;
}

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAns, setUserAns] = useState<AnswerObj[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAns([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev: any) => prev + 1);
      //Save answer in the array for user answers
      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAns: questions[number].correct_answer,
      };
      setUserAns((prev: any) => [...prev, answerObj]);
    }
  };

  const nextQuestion = () => {
    //Move on to newxt question if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>RECT QUIX</h1>
        {gameOver || userAns.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading && <p>Loading Questions ...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNm={number}
            totalQuestion={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAns ? userAns[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAns.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
