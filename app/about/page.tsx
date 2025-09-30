"use client";
import React, { useRef, useEffect, useState } from "react";

export default function AboutPage() {
  const bg = "url('/game_07.png')";
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);
  const lastMouseX = useRef<number | null>(null);
  const mouseCooldown = useRef<number>(0);

  const BASE_WIDTH = 600;
  const BASE_HEIGHT = 340;
  const [scale, setScale] = useState(1);

  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    nickname: "",
    avatar: "/avatar1.png",
  });

  // 1. 登入時寫入 localStorage
  // localStorage.setItem("mygame_loggedIn", "true");
  // localStorage.setItem("mygame_user", JSON.stringify(formData));

  // 2. 每個頁面初始化時讀取
  useEffect(() => {
    const loggedIn = localStorage.getItem("mygame_loggedIn") === "true";
    const user = localStorage.getItem("mygame_user");
    if (loggedIn && user) {
      setLoggedIn(true);
      setFormData(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // 只攔截主要的垂直滾动並轉成水平滾动
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

  // 當滑鼠靠右邊界時，自動平滑滾到最後一個區塊（section2）
  const hasScrolledRight = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const THRESHOLD = 24;
    const COOLDOWN_MS = 800;
    let lastScrollTime = 0;
    let lastDirection: "left" | "right" | null = null;

    const onMouseMove = (e: MouseEvent) => {
      if (Date.now() - lastScrollTime < COOLDOWN_MS) return;
      const atRight = el.scrollLeft >= el.scrollWidth - el.clientWidth - 20;
      const atLeft = (el.scrollLeft ?? 0) < 20;

      // 靠右邊界且還沒在最右側
      if (
        e.clientX >= window.innerWidth - THRESHOLD &&
        !atRight &&
        lastDirection !== "right"
      ) {
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
        lastScrollTime = Date.now();
        lastDirection = "right";
        return;
      }
      // 靠左邊界且還沒在最左側
      if (
        e.clientX <= THRESHOLD &&
        !atLeft &&
        lastDirection !== "left"
      ) {
        el.scrollTo({ left: 0, behavior: "smooth" });
        lastScrollTime = Date.now();
        lastDirection = "left";
        return;
      }
      // 離開邊界時重設方向
      if (
        e.clientX > THRESHOLD &&
        e.clientX < window.innerWidth - THRESHOLD
      ) {
        lastDirection = null;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / BASE_WIDTH;
      const scaleY = window.innerHeight / BASE_HEIGHT;
      setScale(Math.min(scaleX, scaleY, 1)); // 不會超過 1
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const floatKeyframes = `
  @keyframes livelyFloat {
    0%   { transform: translateX(0) scale(1);}
    100% { transform: translateX(18px) scale(1);}
  }
  `;

  // 在組件內加 keyframes
  const section2FloatKeyframes = `
  @keyframes section2Float {
    0%   { transform: translateY(0) scale(1);}
    50%  { transform: translateY(-10px) scale(1.03);}
    100% { transform: translateY(0) scale(1);}
  }
  `;

  const HOVER_OFFSET = 0; // 不再根據 hover 改變

  // 新增 hover 狀態
  const [section2Hover, setSection2Hover] = useState(false);

  return (
    <>
      <style>{floatKeyframes}</style>
      <style>{section2FloatKeyframes}</style>
      <main
        ref={scrollRef}
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          backgroundColor: "#000",
        }}
        aria-hidden={false}
      >
        {/* 動態背景影片 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <source src="/background.mp4" type="video/mp4" />
          您的瀏覽器不支援影片播放。
        </video>

        {/* 半透明黑色遮罩，讓背景變暗 */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.45)", // 透明度可調整
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* 固定縮放的 game_08.png 圖片容器 */}
        <div
          id="game08"
          style={{
            position: "absolute",
            // 往上多移 40px（原本 +64，現在 +104）
            top: `calc(50% - ${BASE_HEIGHT / 2 * scale + 160 * scale}px)`,
            left: `calc(50% - ${BASE_WIDTH / 2 * scale - -60 * scale}px)`,
            width: BASE_WIDTH,
            height: BASE_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            zIndex: 4,
            pointerEvents: "none",
            transition: "transform 0.25s cubic-bezier(.2,.9,.2,1)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="game_08.png"
            alt="遊戲研究社"
            style={{
              width: "320px",
              maxWidth: "90%",
              height: "auto",
              marginTop: 0,
              marginLeft: 0,
              filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.18))",
              pointerEvents: "none",
              display: "block",
            }}
          />
        </div>

        {/* scroll container: 兩個橫向區塊，寬各為 100vw */}
        <div style={{ display: "flex", flexDirection: "row", height: "100vh", width: "200vw", gap: "20vw" }}>
          {/* 第一區塊：內容靠右一點，減少與第二區塊的視覺空白 */}
          <section
            style={{
              minWidth: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: "12vw",
              boxSizing: "border-box",
            }}
          >
            {/* 介紹內容容器直接放這裡 */}
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                background: "rgba(255,255,255,0.02)",
                padding: 55,
                borderRadius: 16,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                width: BASE_WIDTH,
                height: BASE_HEIGHT,
                boxSizing: "border-box",
                transition: "box-shadow 220ms ease",
                willChange: "transform, box-shadow",
                animation: hover ? "livelyFloat 1.2s cubic-bezier(.2,.9,.2,1) forwards" : "none",
                boxShadow: hover ? "0 20px 40px rgba(0,0,0,0.35)" : "none",
                zIndex: 4,
                pointerEvents: "auto",
                transform: `scale(${scale})`,
                marginTop: "120px",
                marginRight: "120px", // 新增這行，讓內容再往左
              }}
            >
              {/* 介紹文字 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  maxWidth: "36ch",
                  color: "white",
                  fontSize: "16px",
                  lineHeight: 1.5,
                  textAlign: "left",
                }}
              >
                <p style={{ margin: 0 }}>遊戲研究社從 2025 年開始，加入更多遊戲元素與活動。</p>
                <p style={{ margin: 0 }}>目前有 Switch、桌遊、玩具版斗城玩具槍等內容。</p>
                <p style={{ margin: 0 }}>未來會陸續增加更多元的遊戲品項與活動。</p>
                <p style={{ margin: 0 }}>每月舉辦主題日與小競賽，冠軍有小獎勵，歡迎參加！</p>
              </div>
              {/* 回首頁按鈕 */}
              <button
                onClick={() => (window.location.href = "/")}
                style={{
                  position: "absolute",
                  right: 32,
                  bottom: 32,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                  padding: "8px 18px",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 15,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                  pointerEvents: "auto",
                  zIndex: 5,
                }}
                aria-label="回首頁"
              >
                回首頁
              </button>
            </div>
          </section>

          {/* 第二區塊：內容靠左一點，減少與第一區塊的視覺空白 */}
          <section
            style={{
              minWidth: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: "12vw",
              boxSizing: "border-box",
              zIndex: 9999,
            }}
            // 滑鼠移入/移出時切換 hover 狀態
            onMouseEnter={() => setSection2Hover(true)}
            onMouseLeave={() => setSection2Hover(false)}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 36,
              background: "rgba(255,255,255,0.02)",
              padding: 24,
              borderRadius: 12,
            }}>
              {/* 左側圖片加條件動畫 */}
              <img
                src="/game_09.png"
                alt="活動形象"
                style={{
                  width: 360,
                  height: "auto",
                  borderRadius: 8,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                  background: "#222",
                  objectFit: "cover",
                  animation: section2Hover ? "section2Float 2.8s ease-in-out infinite" : "none",
                }}
              />
              {/* 右側描述加條件動畫 */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                position: "relative",
                minWidth: 260,
                minHeight: 140,
                justifyContent: "flex-start",
                animation: section2Hover ? "section2Float 2.8s ease-in-out infinite 0.5s" : "none",
              }}>
                <div style={{ color: "white", margin: 0, fontSize: 22, fontWeight: 700 }}>歡迎加入我們</div>
                <div style={{ color: "white", margin: 0, fontSize: 15, lineHeight: 1.6 }}>
                  想參加更多精彩活動嗎？<br />
                  快來報名加入遊戲研究社，一起體驗各種有趣的遊戲與活動！
                </div>
                {/* 活動報名按鈕 */}
                <a
                  href="/register"
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: -150, // 建議設 16~32
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    padding: "8px 20px",
                    borderRadius: 6,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 15,
                    letterSpacing: 1,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    transition: "background 0.2s",
                    animation: "none", // 取消浮動效果
                  }}
                >
                  活動報名
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* 新增的 canvas 元素 */}
        <canvas id="myCanvas" width="400" height="300"></canvas>
      </main>
    </>
  );
}
