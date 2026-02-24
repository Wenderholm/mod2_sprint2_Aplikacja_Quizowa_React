import React from "react";
import Button from "./Button";

export default function QuestionCard({ question, index, onAnswer }) {
  return (
    <div
      style={{
        width: "100%",
        fontSize: 12,
        textAlign: "center",
      }}
    >
      <h2 style={{ marginTop: 0 }}>
        Pytanie {index + 1}: {question.text}
      </h2>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {question.answers.map((opt, i) => {
          //   const isSelected = selected === i;
          return (
            <div key={i}>
              <Button
                onClick={() => onAnswer(i)}
                style={{
                  border: "1px solid #ddd",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {opt.text}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
