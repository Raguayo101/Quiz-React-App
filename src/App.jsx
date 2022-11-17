import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Home from "./components/Home";
import QuestionPage from "./components/QuestionPage";

function App() {
  const [page, setPage] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState({
    category: "",
    difficulty: "",
    type: "",
  });

  let url = `https://opentdb.com/api.php?amount=5&category=${options.category}&difficulty=${options.difficulty}&type=${options.type}`;

  const handleChange = (event) => {
    const { name, value } = event;

    setOptions((prevGameOptions) => {
      return {
        ...prevGameOptions,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    getApi();
  }, [options, resetGame]);

  function getApi() {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setQuestions(
          data.results.map((q, index) => {
            let answersArray = q.incorrect_answers;
            answersArray.push(q.correct_answer);
            return {
              key: index,
              id: uniqid(),
              question: q.question,
              correctAnswer: q.correct_answer,
              answers: answersArray,
              answered: false,
              correct: false,
              answerGiven: "",
            };
          })
        )
      );
  }
  function togglePage() {
    setPage((prevPage) => !prevPage);
  }

  const restartGame = () => {
    togglePage();
    playAgain();
  };

  const endQuiz = () => {
    for (let question of questions) {
      if (question.correct) {
        setScore((prevScore) => {
          return prevScore + 1;
        });
      }
    }
    setQuizEnd(true);
  };

  const playAgain = () => {
    setScore(0);
    setQuizEnd(false);
    setResetGame((prevState) => !prevState);
  };

  const handleAnswer = (id, answer) => {
    setQuestions((prevState) => {
      return prevState.map((question) => {
        if (question.id == id) {
          return {
            ...question,
            answerGiven: answer,
            answered: true,
            correct: answer === question.correctAnswer,
          };
        } else {
          return question;
        }
      });
    });
  };

  let displayQuestionPage = questions.map((el) => {
    return (
      <QuestionPage
        key={el.id}
        quizEnded={quizEnd}
        {...el}
        answerQuestion={handleAnswer}
      />
    );
  });

  return (
    <div
      className="h-screen font-inter flex flex-col justify-center items-center
    "
    >
      {page ? (
        <div>
          <h1 className="text-5xl text-center mb-10 text-bluee font-bold">
            Time to test your trivia!
          </h1>
          {displayQuestionPage}
        </div>
      ) : (
        <Home
          toggle={togglePage}
          options={options}
          handleChange={handleChange}
        />
      )}
      {!quizEnd && page && (
        <button
          className="mt-10 border-bluee border-2 rounded-lg p-2 text-lg
          bg-bluee text-white"
          onClick={endQuiz}
        >
          Check Answers
        </button>
      )}
      {quizEnd && (
        <div className="flex mt-10">
          <p className="m-4 font-bold text-xl">You scored {score} out of 5</p>
          <button
            className=" border-bluee border-2 rounded-lg p-2 text-lg
        bg-bluee text-white"
            onClick={playAgain}
          >
            Play Again
          </button>

          <button
            className=" border-bluee border-2 rounded-lg p-2 text-lg
        bg-bluee text-white mx-3"
            onClick={restartGame}
          >
            Reset Options
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
