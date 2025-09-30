"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ChatBox from "./components/ChatBox";
import ProfileModal from "./components/ProfileModal";

export default function Home() {
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [showLogin, setShowLogin] = useState(false); // 一開始不顯示登入視窗
  const [loggedIn, setLoggedIn] = useState(false);   // 一開始不顯示頭像
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    nickname: "",
    avatar: "/avatar1.png",
  });
  const [showProfile, setShowProfile] = useState(false);
  const [profileUser, setProfileUser] = useState<{ nickname?: string; avatar?: string; profession?: string; loginDays?: number } | undefined>(undefined);

  // 新增：全域登入使用者狀態
  const [currentUser, setCurrentUser] = useState<{
    nickname: string;
    avatar: string;
    loggedIn: boolean;
  }>( {
    nickname: "",
    avatar: "",
    loggedIn: false,
  });

  // 職業列表
  const professions = [
    "薪水小偷", "動物管理員", "總統", "垃圾車", "無敵星星", "神射手", "老闆",
    "愛情顧問", "低調宅宅", "瞌睡蟲", "哭哭", "香菇", "貓咪", "狗狗", "社畜",
    "主管", "法師", "獵人", "戰士", "盜賊", "牧師", "聖騎士", "德魯伊", "薩滿"
  ];
  const [jobIndex, setJobIndex] = useState(0);
  const [loginDays, setLoginDays] = useState(1);
  const [hasProfession, setHasProfession] = useState(false);

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

  const handlePrevJob = () => {
    setJobIndex((prev) => (prev - 1 + professions.length) % professions.length);
  };

  const handleNextJob = () => {
    setJobIndex((prev) => (prev + 1) % professions.length);
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          profession: professions[jobIndex],
          loginDays,
        }),
      });

      const data = await res.json();
      console.log("後端回應：", data);

      if (data.success) {
        setLoggedIn(true);
        setShowLogin(false);

        // 新增：登入成功同步 currentUser（可按需調整 avatar 路徑或 nickname）
        setCurrentUser({
          nickname: formData.nickname || "訪客",
          avatar: "/game_04.png",
          loggedIn: true,
        });

        // 1. 登入時寫入 localStorage
        localStorage.setItem("mygame_loggedIn", "true");
        localStorage.setItem("mygame_user", JSON.stringify({
          ...formData,
          profession: professions[jobIndex], // 存下當下選的職業
        }));
      }
    } catch (err) {
      console.error("登入失敗", err);
    }
  };

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
    const user = localStorage.getItem("mygame_user");
    if (user) {
      const parsed = JSON.parse(user);
      if (parsed.profession) setHasProfession(true);
    }
  }, [showLogin]);

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/game_00.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* 可模糊的整個舞台區塊，showProfile 時套用 filter */}
      <div style={{ width: "100%", height: "100%", filter: showProfile ? "blur(6px) saturate(0.9)" : "none", transition: "filter 200ms ease" }}>
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
          <img src="/game_00.png" alt="背景" style={{ position: "absolute", width: "1280px", height: "720px", top: 0, left: 0 }} />

          {/* 公告欄（你原本的） */}
          <div style={{ position: "absolute", bottom: "110px", left: "360px", width: "560px", zIndex: 999 }}>
            {/* ...公告內容... */}
          </div>

          {/* ChatBox：inline 模式（跟背景一起縮放），放在公告欄左側（或改 right/bottom） */}
          <ChatBox
            currentUser={currentUser}
            usePortal={false}        // 內嵌於 stage，會跟背景一起縮放與移動
            left="50px"            // 或用 left="xxx" / top="yyy" 依照要放置的位置調整
            bottom="198px"           // 與公告欄底部對齊
            width={280}
            height={148}
            bubbleMinHeight={32}
            bubbleVerticalPadding={6}
          />

          {/* 右下角文字區塊 */}
          <div
            style={{
              position: "absolute",
              bottom: "170px",
              right: "45px",
              width: "250px",
              color: "white",
              padding: "0.0vw 0vw",
              borderRadius: "10px",
              fontSize: "10px",
              lineHeight: "2",
              zIndex: 9999,
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "0px", fontSize: "13px" }}>💌注意事項</h3>
            <ul style={{ margin: 0, paddingLeft: "0px" }}>
              <li>● 歡迎報名戶外活動，包含桌遊店、密室逃脫等多樣主題，限十人或以上</li>
              <li>● 每個月舉行一次主題日活動，有小比賽，獎勵等你拿!</li>
              <li>● 每周遊戲將由參加者自行決定要玩的桌遊品項，共四款</li>
              <li>● 每個月有一周為本社團休息周，不另做公告</li>
              <li>● 遊戲研究社日程規劃，詳細請看遊戲研究社日程表</li>
              <li>● 歡迎推薦遊戲，將視社費狀況進行購買</li>
            </ul>
          </div>
          
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
              style={{ 
                width: "600px", 
                height: "180px", 
                display: "block",
                margin: "0 auto",         // 讓圖片在容器內水平置中
                transform: "scale(0.9)",  // 縮小 90%
                transformOrigin: "center" // 以中心點縮放
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "59%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "520px",
                color: "black",
                fontWeight: "bold",
                fontSize: "10px",
                lineHeight: "18px",
                display: "flex",          // 啟用 Flexbox
                justifyContent: "center", // 水平置中
                alignItems: "center",     // 垂直置中
              }}
            >
              <div style={{ padding: "20px", color: "black" }}>
                <p>💌最新公告</p>
                <hr
                  style={{
                    border: "none",
                    backgroundColor: "white",
                    opacity: 0.6, // 🔹 整條線透明度 60%
                    width: "400px",  // 公告欄寬度
                    borderTop: "0.1px solid",
                    margin: "3px 0",
                  }}
                />
                <p>🔸下次桌遊將在10/13舉行!</p>
                <hr
                  style={{
                    border: "none",
                    opacity: 0.6, // 🔹 整條線透明度 60%
                    borderTop: "0.5px solid",
                    margin: "3px 0",
                  }}
                />
                <p>🔸歡迎推薦遊戲品項，請至桌遊投票區開盲盒!</p>
                <hr
                  style={{
                    border: "none",
                    opacity: 0.6, // 🔹 整條線透明度 60%
                    borderTop: "0.5px solid",
                    margin: "3px 0",
                  }}
                />
                 <p>🔸本月主題日_夜市人生，將舉行射擊遊戲!歡迎來練習!</p>
                <hr
                  style={{
                    border: "none",
                    borderTop: "0.5px solid",
                    margin: "3px 0",
                    opacity: 0.6, // 🔹 整條線透明度 60%
                  }}
                />
              </div>
            </div>
          </div>
          {/* 導覽列 */}
          <nav
            style={{
              position: "absolute",
              bottom: "12%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.6)",
              padding: "0px 5px",
              borderRadius: "8px",
              display: "flex",
              gap: "0",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 15%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0) 100%)",
            }}
          >
            {[
              { href: "/about", label: "關於我們" },
              { href: "/register", label: "活動報名" },
              { href: "/vote", label: "桌遊投票" },
              { href: "/shop", label: "推薦購買" },
              { href: "/gallery", label: "活動劇照" },
              { href: "/custom-game", label: "自製遊戲分享" },
            ].map((item, index, arr) => (
              <React.Fragment key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    padding: "clamp(6px, 0.8vw, 12px) clamp(12px, 1.5vw, 18px)",
                    color: "white",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    fontSize: "clamp(12px, 1.2vw, 12px)",
                    lineHeight: "1.5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.label}
                </Link>
                {index < arr.length - 1 && (
                  <span
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      margin: "0 6px",
                    }}
                  >
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
          {/* 頭像區塊 */}
          {loggedIn && (
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                width: "200px",            // 底圖寬度
                height: "80px",            // 底圖高度
                boxSizing: "border-box",
                zIndex: 9999,
                borderRadius: "8px",
                overflow: "hidden",        // 重要：把內容限制在底圖內
                backgroundImage: "url('/game_03.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                color: "white",
                display: "flex",
                alignItems: "center",
                padding: "0 10px 0 46px",  // 左側留給圓形頭像

              }}
            >
               {/* 人物資訊 */}
              <div
                onClick={() => {
                  setProfileUser({
                    nickname: formData.nickname,
                    avatar: currentUser.avatar || formData.avatar,
                    profession: professions[jobIndex],
                    loginDays,
                  });
                  setShowProfile(true);
                }}
                style={{
                  position: "absolute",
                  bottom: -8,
                  right: -15,
                  width: "100px",
                  height: "40px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "#fff",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                  zIndex: 11000, // 提升以避免被蓋住
                  pointerEvents: "auto",
                }}
              >
                人物資訊
              </div>


              {/* 頭像區塊 */}
              <div
                onClick={() => {
                  setProfileUser({
                    nickname: formData.nickname,
                    avatar: currentUser.avatar || formData.avatar,
                    profession: professions[jobIndex],
                    loginDays,
                  });
                  setShowProfile(true);
                }}
                 style={{
                  position: "absolute",
                  left: "14px",
                  top: "18px",
                  width: "41px",
                  height: "41px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",    // 顯示可點擊
                  zIndex: 11000,        // 提升到頂層，避免被其他元素蓋住
                  pointerEvents: "auto" // 確保能接收點擊
                 }}
               >
                 <img
                   src="/game_04.png"  // public 資料夾裡的圖片
                   alt="頭像"
                   style={{
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                   }}
                 />
               </div>


                {/* 白色橫線 */}
                <div
                  style={{
                    position: "absolute",
                    top: "41px",        // ← 調整數值，讓它落在暱稱跟進度條中間
                    left: "66px",      // ← 起始位置
                    width: "116px",     // ← 線的長度
                    height: "1px",      // ← 線的粗細
                    backgroundColor: "#ffe676ff", // ← 線的顏色
                    opacity: 0.9,
                    zIndex: 9999,       // ← 確保顯示在最上層
                    backgroundColor: "rgba(255, 255, 255, 0.4)", // 白色 + 60% 不透明
                  }}
                />

              {/* 文字與進度主體（位於底圖範圍內） */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", zIndex: 2 }}>
                {/* 左側：暱稱+職業（垂直排列） */}
                <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                  <div
                    style={{
                      position: "absolute",
                      left: "65px",
                      top: "30%",
                      fontSize: "14px",
                      fontWeight: "bold",
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "160px",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                    }}
                  >
                
                    {formData.nickname}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "100px",
                      top: "28%",
                      fontSize: "9px",
                      color: "rgba(255,255,255,0.95)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "160px",
                      marginTop: "2px",
                    }}
                  >
                    {professions[jobIndex]}
                  </div>
                </div>

                {/* 右側：標題 + 進度條（都會被限制在底圖內） */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", minWidth: 0 }}>

                  <div style={{ 
                    position: "absolute",
                    left: "65px",
                    top:"59%",
                    display: "flex", 
                    alignItems: "center", 
                    gap: "6px"
                    
                     }}>
                    <div style={{ 
                      width: "80px", 
                      height: "6px", 
                      backgroundColor: "#333", borderRadius: "4px", 
                      overflow: "hidden"
                       }}>


                      <div style={{ 
                      width: `${(loginDays / 30) * 100}%`, 
                      height: "100%",
                      backgroundColor: "limegreen" }} />
                    </div>
                    
                    <div style={{ 
                      position: "absolute",
                      left: "80px",
                      fontSize: "8px", 
                      whiteSpace: "nowrap" 
                      }}>{loginDays} / 30 天數</div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div> {/* <-- 正確關閉 舞台 (1280x720) */}
      </div>{/* end blur container */}

      {/* modal（置中，會在最上層顯示） */}
      {showProfile && (
        <ProfileModal
          user={profileUser}
          onClose={() => {
            setShowProfile(false);
            setProfileUser(undefined);
          }}
        />
      )}

      {/* 右上角 LOG IN 按鈕 */}
      {!loggedIn && (
        <button
          onClick={() => setShowLogin(true)}
          style={{
            position: "absolute",
            top: "calc(0% + 2%)",
            right: "40px",
            background: "rgba(0,0,0,0.6)",
            color: "white",
            padding: "0.3vw 0.5vw",
            borderRadius: "5px",
            border: "1px solid white",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "0.9vw",
            zIndex: 9999,
          }}
        >
          LOG IN
        </button>
      )}
      {/* 登入視窗（點 LOG IN 才出現） */}
      {showLogin && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            zIndex: 9999,
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
              backgroundImage: "url('/login_bg.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            {/* X 圖片按鈕 */}
            <img
              src="/close.png"
              alt="Close"
              onClick={() => setShowLogin(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "30px",
                width: "36px",
                height: "32px",
                cursor: "pointer",
                zIndex: 2,
              }}
            />
            {/* 職業選擇 */}
            <div
            style={{
              position: "absolute",
              top: "83px", // 調整上下
              left: "53%",
              transform: "translateX(-50%)",
              width: "300px", // 覆蓋職業選擇區域的寬度
              height: "40px", // 加上固定高度，方便置中
              display: "flex",
              alignItems: "center", // 垂直置中
              justifyContent: "center", // 水平置中
              color: "black",
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "center",
             }}
            >
              {/* 左箭頭透明按鈕 */}
              <button
                onClick={handlePrevJob}
                style={{
                  position: "absolute",
                  left: "82px",   // 對齊背景綠色箭頭
                  top: "18px",
                  width: "30px", // 覆蓋箭頭大小
                  height: "30px",
                  background: "transparent",
                  //border: "2px solid red",
                  cursor: "pointer",
                }}
                aria-label="Prev"
              />

              {/* 中間職業名稱 */}
              <span>{professions[jobIndex]}</span>

              {/* 右箭頭透明按鈕 */}
              <button
                onClick={handleNextJob}
                style={{
                  position: "absolute",
                  right: "48px",  // 對齊背景綠色箭頭
                  top: "18px",
                  width: "30px",
                  height: "30px",
                  background: "transparent",
                  //border: "2px solid red",
                  cursor: "pointer",
                }}
                aria-label="Next"
              />
            </div>

            {/* 透明輸入欄 */}
            <input
              type="text"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              placeholder=""
              autoComplete="off"
              style={{
                position: "absolute",
                top: "125px",
                left: "26px",
                width: "305px",
                height: "28px",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#ffffffff",
                fontSize: 14,
                textAlign: "center",
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
                top: "154px",
                left: "26px",
                width: "305px",
                height: "28px",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#ffffffff",
                fontSize: 14,
                textAlign: "center",
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
                top: "183px",
                left: "20px",
                width: "305px",
                height: "28px",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#ffffffff",
                fontSize: 14,
                textAlign: "center",
              }}
            />
            {/* 透明 OK 按鈕 */}
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
              }}
              aria-label="OK"
            />
          </div>
        </div>
      )}
      {/* 登出按鈕 */}
      {loggedIn && (
        <>
          <button
            onClick={() => {
              // 登出時同步清除 localStorage
              localStorage.removeItem("mygame_loggedIn");
              localStorage.removeItem("mygame_user");
              setLoggedIn(false);
              setShowProfile(false);
              setProfileUser(undefined);
              setCurrentUser({ nickname: "", avatar: "", loggedIn: false });
              setFormData({ department: "", name: "", nickname: "", avatar: "/avatar1.png" });
              setShowLogin(false);
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "40px",
              background: "rgba(0,0,0,0.6)",
              color: "white",
              padding: "0.3vw 0.6vw",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.12)",
              cursor: "pointer",
              fontWeight: "700",
              border: "1px solid white",
              fontSize: "0.9vw",
              zIndex: 9999,
            }}
          >
            Log out
          </button>

          {/* 使用者顯示區 */}
          <div
            style={{
              position: "absolute",
              top: 65,
              right: 40,
              width: 85,
              maxHeight: 160,
              overflowY: "auto",
              padding: "6px 8px",
              background: "rgba(0,0,0,0.45)",
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              zIndex: 9999,
              boxSizing: "border-box",
              transform: `scale(${scale * 0.7})`,
              transformOrigin: "top right",
              willChange: "transform",
              pointerEvents: "auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", overflow: "hidden", background: "#333", flexShrink: 0 }}>
                <img
                  src="/game_04.png" // 改為固定顯示 game_04
                  alt="avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ color: "white", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth: 76 }}>
                {currentUser.nickname || formData.nickname || "訪客"}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

