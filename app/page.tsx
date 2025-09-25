"use client";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎮 我的互動小遊戲</h1>
      <p>分數：{score}</p>
      <button
        onClick={() => setScore(score + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        點我加分！
      </button>
    </main>
  );
}
