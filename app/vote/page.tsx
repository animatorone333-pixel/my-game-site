"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// 隨機排列陣列
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function VotePage() {
  const router = useRouter();
  const items = ["璀璨寶石", "印加寶藏", "德國蟑螂", "寶可夢卡牌"];
  const [shuffledItems, setShuffledItems] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [votes, setVotes] = useState<number[]>([0, 0, 0, 0]);

  // 1. 設定基準寬高
  const BASE_WIDTH = 1200;
  const BASE_HEIGHT = 800;
  const [scale, setScale] = useState(1);

  // 2. 動態計算縮放比例
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scaleW = w / BASE_WIDTH;
      const scaleH = h / BASE_HEIGHT;
      setScale(Math.min(scaleW, scaleH, 1)); // 不超過 1
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setShuffledItems(shuffle(items));
  }, []);

  const handleVote = () => {
    if (selected === null) return;
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    setSelected(null);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 最底層背景 game_11 滿版 */}
      <img
        src="/game_11.png"
        alt="背景"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      {/* game_10 當容器，正中央且跟著縮放 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
          backgroundImage: "url(/game_10.png)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* 所有物件都放在 game_10 容器裡，位置用 px 絕對定位 */}
        <img
          src="/chest_1.png"
          alt="chest1"
          style={{
            position: "absolute",
            left: "70px",
            top: "140px",
            width: "210px",
            height: "auto",
          }}
        />
        <img
          src="/chest_2.png"
          alt="chest2"
          style={{
            position: "absolute",
            left: "340px",
            top: "140px",
            width: "210px",
            height: "auto",
          }}
        />
        <img
          src="/chest_3.png"
          alt="chest3"
          style={{
            position: "absolute",
            left: "610px",
            top: "140px",
            width: "210px",
            height: "auto",
          }}
        />
        <img
          src="/chest_4.png"
          alt="chest4"
          style={{
            position: "absolute",
            left: "880px",
            top: "140px",
            width: "210px",
            height: "auto",
          }}
        />

        {/* 投票按鈕 */}
        <img
          src="/button_vote.png"
          alt="投票"
          onClick={handleVote}
          style={{
            position: "absolute",
            left: "260px",
            top: "520px",
            width: "260px",
            height: "70px",
            cursor: "pointer",
          }}
        />

        {/* 回首頁按鈕 */}
        <img
          src="/button_home.png"
          alt="回首頁"
          onClick={() => router.push("/")}
          style={{
            position: "absolute",
            left: "260px",
            top: "610px",
            width: "260px",
            height: "70px",
            cursor: "pointer",
          }}
        />

        {/* 票數區 */}
        <div
          style={{
            position: "absolute",
            left: "570px",
            top: "520px",
            width: "540px",
            height: "160px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {shuffledItems.map((item, i) => (
            <div
              key={i}
              style={{
                width: "120px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <img
                src={`/score_${i + 1}.png`}
                alt={item}
                style={{
                  width: "100px",
                  height: "100px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "12px",
                  bottom: "12px",
                  fontSize: "28px",
                  color: "#ffd700",
                  fontWeight: "bold",
                  textShadow: "0 2px 8px #333",
                  background: "rgba(0,0,0,0.3)",
                  borderRadius: "6px",
                  padding: "2px 8px",
                  pointerEvents: "none",
                }}
              >
                {votes[i]}
              </span>
              <div
                style={{
                  fontSize: "18px",
                  color: "#fff",
                  marginTop: "8px",
                  fontWeight: "bold",
                  textShadow: "0 2px 8px #333",
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
        {/* ...其他物件... */}
      </div>
    </div>
  );
}

