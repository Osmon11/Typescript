import React from "react";
import { AnswerObj } from "../App";
//Styles
import { ButtonWrapper, Wrapper } from "./questionCard.styles";

interface Props {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: AnswerObj | undefined;
  questionNm: number;
  totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNm,
  totalQuestion,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNm} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer, index) => (
          <ButtonWrapper
            key={answer + index}
            correct={userAnswer?.correctAns === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
