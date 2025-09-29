"use client";
import React, { useRef, useEffect, useState } from "react";

export default function AboutPage() {
  const bg = "url('/game_07.png')";
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);
  const lastMouseX = useRef<number | null>(null);
  const mouseCooldown = useRef<number>(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // 只攔截主要的垂直滾動並轉成水平滾动
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "auto" });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // 進入頁面時確保滾動位置在第一個區塊（section1）
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "auto" });
  }, []);

  // 當滑鼠往左移動時，自動平滑滾回第一個區塊（section1）
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const last = lastMouseX.current;
      if (last != null) {
        const dx = x - last;
        // 只有在向左快速移動且間隔超過 cooldown 時觸發
        if (dx < -10 && Date.now() - mouseCooldown.current > 600) {
          // 只有在不是已經靠近左側時才觸發
          if ((el.scrollLeft ?? 0) > 20) {
            el.scrollTo({ left: 0, behavior: "smooth" });
            mouseCooldown.current = Date.now();
          }
        }
      }
      lastMouseX.current = x;
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // 當滑鼠靠左邊界時，自動平滑滾回第一個區塊（section1）
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const THRESHOLD = 24; // 距離左邊界多少 px 就觸發
    const COOLDOWN_MS = 800;
    const onMouseMove = (e: MouseEvent) => {
      if (Date.now() - mouseCooldown.current < COOLDOWN_MS) return;
      // 當滑鼠 x 座標靠近左邊界且目前不是已經在最左側時，觸發滾回
      if (e.clientX <= THRESHOLD && (el.scrollLeft ?? 0) > 20) {
        el.scrollTo({ left: 0, behavior: "smooth" });
        mouseCooldown.current = Date.now();
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <main
      ref={scrollRef}
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "#000",
        overflowX: "auto", // horizontal scroll container
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",
      }}
      aria-hidden={false}
    >
      {/* scroll container: 兩個橫向區塊，寬各為 100vw */}
      <div style={{ display: "flex", flexDirection: "row", height: "100vh", width: "200vw", gap: "20vw" }}>
        {/* 第一區塊：內容靠右一點，減少與第二區塊的視覺空白 */}
        <section
          style={{
            minWidth: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end", // 內容靠近右邊
            paddingRight: "6vw",        // 微調距離
            boxSizing: "border-box",
          }}
        >
          <div style={{ background: "rgba(255,255,255,0.02)", padding: 16, borderRadius: 12, textAlign: "center" }}>
            <h2 style={{ color: "white", margin: 0 }}>Section 1</h2>
          </div>
         </section>

        {/* 第二區塊：內容靠左一點，減少與第一區塊的視覺空白 */}
        <section
          style={{
            minWidth: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start", // 內容靠近左邊
            paddingLeft: "6vw",           // 微調距離
            boxSizing: "border-box",
          }}
        >
          <div style={{ background: "rgba(255,255,255,0.02)", padding: 16, borderRadius: 12 }}>
            <h2 style={{ color: "white", margin: 0 }}>Section 2</h2>
          </div>
        </section>
      </div>

      {/* 第一區塊內容：遊戲研究社介紹 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          padding: "0 2rem",
          boxSizing: "border-box",
        }}
      >
        {/* 獨立 Title（不跟文字 hover 動畫連動） */}
        <h1
          style={{
            position: "absolute",
            top: 390,
            left: "36%",
            transform: "translateX(-50%)",
            margin: 0,
            color: "white",
            fontFamily:
              "'Microsoft JhengHei', 'Microsoft JhengHei UI', 'PingFang TC', 'Noto Sans TC', 'Segoe UI', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(28px, 4.6vw, 64px)",
            lineHeight: 1,
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          遊戲研究社
        </h1>

        {/* hover 容器：只包含會浮動的文字內容 */}
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            background: "rgba(255,255,255,0.02)",
            padding: 24,
            borderRadius: 12,
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            maxWidth: "70vw",
            transition: "transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms ease",
            willChange: "transform, box-shadow",
            transform: hover ? "translateY(-8px) scale(1.02)" : "none",
            boxShadow: hover ? "0 20px 40px rgba(0,0,0,0.35)" : "none",
            zIndex: 2,
          }}
        >
          <style>{`
            @font-face {
              font-family: "LiShuW5";
              src: local("LiShuW5"), url("/fonts/LiShuW5.ttf") format("truetype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }
            @keyframes floatX {
              0% { transform: translateX(0); }
              50% { transform: translateX(6px); }
              100% { transform: translateX(0); }
            }
          `}</style>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              maxWidth: "36ch",
              color: "white",
              fontSize: "14px",
              lineHeight: 1.4,
              animation: hover ? "floatX 3s ease-in-out infinite" : "none",
              willChange: "transform",
            }}
          >
            <p style={{ margin: 0, textAlign: "left" }}>歡迎加入遊戲研究社。</p>
            <p style={{ margin: 0, textAlign: "left" }}>我們從 2025 年開始，加入更多遊戲元素與活動。</p>
            <p style={{ margin: 0, textAlign: "left" }}>目前有 Switch、桌遊、玩具版斗城玩具槍等內容。</p>
            <p style={{ margin: 0, textAlign: "left" }}>未來會陸續增加更多元的遊戲品項與活動。</p>
            <p style={{ margin: 0, textAlign: "left" }}>每月舉辦主題日與小競賽，冠軍有小獎勵，歡迎參加！</p>
          </div>
        </div>

        {/* 獨立回首頁按鈕（不跟文字 hover 動畫連動） */}
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            position: "absolute",
            bottom: 400,
            right: 800,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
            padding: "8px 12px",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 13,
            zIndex: 3,
          }}
          aria-label="回首頁"
        >
          回首頁
        </button>
      </div>
    </main>
  );
}
