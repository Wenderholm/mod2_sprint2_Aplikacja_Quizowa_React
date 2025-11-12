import React from "react";
import Button from "./Button";

function StartScreen({ title = "Quiz", onStart }) {
  return (
    <div>
      <h1 style={{ marginBottom: 20 }}>{title}</h1>
      <Button
        onClick={onStart}
        style={{ backgroundColor: "#00bfffff", color: "white", minWidth: 160 }}
      >
        Rozpocznij quiz
      </Button>
    </div>
  );
}

export default StartScreen;
