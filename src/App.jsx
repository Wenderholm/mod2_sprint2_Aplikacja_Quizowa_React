import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import Summary from "./components/Summary";
import { questions } from "./data/questions";
import "./App.css";

export default function App() {
  const [stage, setStage] = useState("start"); // 'start' | 'quiz' | 'summary'
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const startQuiz = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrent(0);
    setStage("quiz");
  };

  const handleAnswer = (optionIndex) => {
    const updated = [...answers];
    updated[current] = optionIndex;
    setAnswers(updated);
    goNext();
  };
  const goNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
    else setStage("summary");
  };

  const restart = () => {
    setStage("start");
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: 24,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%" }}>
        {stage === "start" && (
          <StartScreen title={"JavaScript Quiz"} onStart={startQuiz} />
        )}

        {stage === "quiz" && (
          <div>
            <QuestionCard
              question={questions[current]}
              index={current}
              onAnswer={handleAnswer}
            />
          </div>
        )}

        {stage === "summary" && (
          <Summary
            questions={questions}
            answers={answers}
            onRestart={restart}
          />
        )}
      </div>
    </div>
  );
}
