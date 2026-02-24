import React from "react";
import Button from "./Button";

export default function Summary({ questions, answers, onRestart }) {
  const total = questions.length;
  const correctCount = questions.reduce(
    (acc, q, idx) => acc + (q.answers[answers[idx]]?.isCorrect ? 1 : 0),
    0
  );
  console.log("odpowiedzi uzytkownika:", answers);

  const percent = Math.round((correctCount / total) * 100).toFixed(2);
  const passed = percent >= 80;

  return (
    <div>
      <div
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 12,
          color: passed ? "green" : "red",
        }}
      >
        {passed
          ? "Gratulacje — zaliczyłeś quiz!"
          : "Niestety — quiz niezaliczony"}
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>Twój wynik to:</strong>{" "}
        <span style={{ color: passed ? "green" : "red" }}>{percent}%</span> (
        {correctCount} z {total} poprawnych odpowiedzi)
      </div>

      <div style={{ marginTop: 16, textAlign: "left" }}>
        <div>
          {questions.map((q, i) => {
            const userIdx = answers[i];
            const userAnswer = q.answers[userIdx];
            const isCorrect = userAnswer?.isCorrect;
            return (
              <li key={i} style={{ marginBottom: 8, listStyleType: "none" }}>
                <div
                  style={{
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "#1976d2",
                  }}
                >
                  {i + 1}. {q.text}
                </div>
                <div style={{ fontWeight: 600 }}>
                  Twoja odpowiedź:{" "}
                  <span
                    style={{
                      fontWeight: 400,
                      color: isCorrect ? "green" : "red",
                    }}
                  >
                    {userAnswer ? userAnswer.text : "Brak odpowiedzi"}
                  </span>
                </div>
              </li>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <Button
          onClick={onRestart}
          style={{ backgroundColor: "#1976d2", color: "white" }}
        >
          Rozpocznij od nowa
        </Button>
      </div>
    </div>
  );
}
