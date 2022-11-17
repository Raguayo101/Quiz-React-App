import React, { useState } from "react";
import { decode } from "html-entities";

export default function (props) {
  const questionList = props.answers.map((answer, i) => {
    let styles = {
      backgroundColor: props.answerGiven === answer ? "#D6DBF5" : "transparent",
    };
    let endingStyles = {
      backgroundColor:
        answer === props.correctAnswer
          ? "#94D7A2"
          : answer === props.answerGiven
          ? "#F8BCBC"
          : "transparent",
      color:
        answer === props.correctAnswer
          ? ""
          : answer === props.answerGiven
          ? "gray"
          : "gray",
      border:
        answer === props.correctAnswer
          ? ""
          : answer === props.answerGiven
          ? "1px solid gray"
          : "1px solid gray",
    };
    return (
      <button
        style={!props.quizEnded ? styles : endingStyles}
        onClick={() => props.answerQuestion(props.id, answer)}
        className="mx-4 border-bluee border-2 rounded-lg p-2 text-sm"
      >
        {decode(answer)}
      </button>
    );
  });

  return (
    <div className="flex flex-col justify-center items-center h-32 ">
      <h1 className="font-bold text-bluee text-lg">{decode(props.question)}</h1>
      <div className="flex mt-3">
        <div>
          {questionList}
          <div className="border-b border-bluee border-solid flex m-5 w-full"></div>
        </div>
      </div>
    </div>
  );
}
