"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  // 合併所有 useState、useEffect、handleLogin、UI內容
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    nickname: "",
    avatar: "/avatar1.png",
  });

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 1280;
      const baseHeight = 720;
      const scaleX = window.innerWidth / baseWidth;
      const scaleY = window.innerHeight / baseHeight;
      const scale = Math.max(scaleX, scaleY);
      setScale(scale);
      setOffsetX((window.innerWidth - baseWidth * scale) / 2);
      setOffsetY((window.innerHeight - baseHeight * scale) / 2);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleLogin = () => {
    console.log("送到後端的資料：", formData);
    setLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
        position: "relative",
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
      </div>
      {/* 導覽列 */}
      <nav
        style={{
          position: "absolute",
          bottom: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.6)",
          padding: "4px 15px",
          borderRadius: "6px",
          display: "inline-flex",
          gap: "0px",
        }}
      >
        <Link
          href="/about"
          style={{
            padding: "6px 12px",
            borderRadius: "6px 0 0 6px",
            color: "white",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          關於我們
        </Link>

        <Link
          href="/register"
          style={{
            padding: "6px 12px",
            borderLeft: "1px solid rgba(255,255,255,0.5)", // 分隔線
            color: "white",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          活動報名
        </Link>

        <Link
          href="/vote"
          style={{
            padding: "6px 12px",
            borderLeft: "1px solid rgba(255,255,255,0.5)", // 分隔線
            color: "white",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          桌遊投票
        </Link>

        <Link
          href="/shop"
          style={{
            padding: "6px 12px",
            borderLeft: "1px solid rgba(255,255,255,0.5)", // 分隔線
            color: "white",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          推薦購買
        </Link>

        <Link
          href="/gallery"
          style={{
            padding: "6px 12px",
            borderLeft: "1px solid rgba(255,255,255,0.5)", // 分隔線
            borderRadius: "0 6px 6px 0",
            color: "white",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          活動劇照
        </Link>

        <Link
          href="/custom-game"
          style={{
            padding: "6px 12px",
            borderLeft: "1px solid rgba(255,255,255,0.5)", // 分隔線
            color: "white",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          自製遊戲分享
        </Link>
      </nav>

      {/* 右上角 LOG IN 按鈕 */}
      <button
        onClick={() => setShowLogin(true)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "rgba(0,0,0,0.6)",
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        LOG IN
      </button>

      {/* 登入視窗（點 LOG IN 才出現） */}
      {showLogin && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            zIndex: 1000,
          }}
          onClick={() => setShowLogin(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "434px",
              height: "302px",
              backgroundImage: "url('/login_bg.png.png')", // 你的背景圖
              backgroundSize: "100% 100%", // 以原圖尺寸等比鋪滿容器
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* 透明輸入欄（完全貼著圖片上的灰色框） */}
            <input
              type="text"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              // 不要顯示 placeholder（圖片已有文字）
              placeholder=""
              autoComplete="off"
              style={{
                position: "absolute",
                top: "112px",
                left: "64px",
                width: "305px",
                height: "28px",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#222",
                fontSize: 14,
                textAlign: "center",
                // ...(DEBUG_GUIDES ? { boxShadow: 'inset 0 0 0 1px red' } : {}),
              }}
            />

            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder=""
              autoComplete="off"
              style={{
                position: "absolute",
                top: "151px",
                left: "64px",
                width: "305px",
                height: "28px",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#222",
                fontSize: 14,
                textAlign: "center",
                // ...(DEBUG_GUIDES ? { boxShadow: 'inset 0 0 0 1px red' } : {}),
              }}
            />

            <input
              type="text"
              value={formData.nickname}
              onChange={(e) =>
                setFormData({ ...formData, nickname: e.target.value })
              }
              placeholder=""
              autoComplete="off"
              style={{
                position: "absolute",
                top: "190px",
                left: "64px",
                width: "305px",
                height: "28px",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#222",
                fontSize: 14,
                textAlign: "center",
                // ...(DEBUG_GUIDES ? { boxShadow: 'inset 0 0 0 1px red' } : {}),
              }}
            />

            {/* 透明 OK 按鈕（直接覆蓋在綠色按鈕上） */}
            <button
              onClick={handleLogin}
              style={{
                position: "absolute",
                left: "165px",
                top: "252px",
                width: "108px",
                height: "38px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                // ...(DEBUG_GUIDES ? { outline: '2px dashed red' } : {}),
              }}
              aria-label="OK"
            />
          </div>
        </div>
      )}
    </main>
  );
}
