"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 1280;
      const baseHeight = 720;
      const scaleX = window.innerWidth / baseWidth;
      const scaleY = window.innerHeight / baseHeight;

      // ✅ 取「最大值」填滿螢幕，可能會裁切
      const scale = Math.max(scaleX, scaleY);

      setScale(scale);

      // ✅ 置中計算偏移
      setOffsetX((window.innerWidth - baseWidth * scale) / 2);
      setOffsetY((window.innerHeight - baseHeight * scale) / 2);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden", // ✅ 超出裁切
        backgroundColor: "black",
      }}
    >
      {/* 舞台 (1280x720) */}
      <div
        style={{
          width: "1280px",
          height: "720px",
          position: "absolute",
          top: `${offsetY}px`,
          left: `${offsetX}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* 背景 */}
        <img
          src="/game_00.png"
          alt="背景"
          style={{
            position: "absolute",
            width: "1280px",
            height: "720px",
            top: 0,
            left: 0,
          }}
        />

        {/* 公告欄 */}
        <div
          style={{
            position: "absolute",
            top: "350px",
            left: "340px",
            width: "600px",
            height: "180px",
          }}
        >
          <img
            src="/game_01.png"
            alt="公告欄"
            style={{ width: "600px", height: "180px", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "520px",
              color: "black",
              fontWeight: "bold",
              fontSize: "12px",
              lineHeight: "18px",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>● 歡迎報名戶外活動，包含桌遊店、密室逃脫等多樣主題，限十人或以上</li>
              <li>● 每個月將舉行一次主題日活動，有小比賽進行，獎勵等你拿!</li>
              <li>● 每周遊戲將由參加者自行決定要玩的桌遊品項，共四款</li>
              <li>● 每個月有一周為本社團休息周，不另做公告</li>
              <li>● 遊戲研究社日程規劃，詳細請看遊戲研究社日程表</li>
              <li>● 歡迎推薦遊戲，將視社費狀況進行購買</li>
            </ul>
          </div>
        </div>

        {/* 小島 */}
        <img
          src="/game_02.png"
          alt="小島"
          style={{
            position: "absolute",
            top: "150px",
            left: "950px",
            width: "220px",
            height: "auto",
          }}
        />
      </div>
    </main>
  );
}
