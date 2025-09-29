"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import ProfileModal from "./ProfileModal";


type Message = {
  text: string;
  sender: "me" | "other";
  nickname?: string;
  avatar?: string; // 可以是圖片或數字字串
};

let guestCounter = 1; // 全域路人計數器

export default function ChatBox({
  currentUser,
  portalScale = 1,
  usePortal = true,
  left = "24px",
  bottom = "40px",
  top,
  right,
  width = 200,
  height = 200,
  bubbleMinHeight = 36,        // ← 改小最低高度
  bubbleVerticalPadding = 6,   // ← 改小上下內距
}: {
  currentUser?: { nickname: string; avatar?: string; loggedIn?: boolean };
  portalScale?: number;
  usePortal?: boolean;
  left?: string | number;
  bottom?: string | number;
  top?: string | number;
  right?: string | number;
  width?: number | string;
  height?: number | string;
  bubbleMinHeight?: number;
  bubbleVerticalPadding?: number;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  // 正確：把這兩個 useState 移到組件內
  const [showProfile, setShowProfile] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{ nickname?: string; profession?: string; loginDays?: number } | null>(null);

  // 新增：在 client mount 後標記已 mount，允許 portal 渲染
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;

    let nickname = "路人";
    let avatar = "";

    if (currentUser?.loggedIn) {
      nickname = currentUser.nickname || "訪客";
      avatar = currentUser.avatar || "😀";
    } else {
      nickname = `路人${guestCounter}`;
      avatar = `${guestCounter}`; // 數字直接當頭像
      guestCounter++;
    }

    setMessages((prev) => [
      ...prev,
      { text: input.trim(), sender: "me", nickname, avatar },
    ]);
    setInput("");
  };

  const baseStyle: React.CSSProperties = {
    zIndex: 30000,
    background: "rgba(0,0,0,0.6)",
    borderRadius: 5,
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 8,                 // 減少整體內距
    color: "white",
    fontSize: 11,               // 整體字級略小
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
    backdropFilter: "blur(4px)",
    boxSizing: "border-box",
  };

  const portalStyle: React.CSSProperties = {
    position: "fixed",
    left: left as any,
    bottom: bottom as any,
    top: top as any,
    right: right as any,
    transform: `scale(${portalScale})`,
    transformOrigin: "left bottom",
    willChange: "transform",
    width,
    height,
    ...baseStyle,
  };

  const inlineStyle: React.CSSProperties = {
    position: "absolute",
    left: left as any,
    bottom: bottom as any,
    top: top as any,
    right: right as any,
    transform: "none",
    width,
    height,
    ...baseStyle,
  };

  const jsx = (
    <div className="chatbox-portal" style={usePortal ? portalStyle : inlineStyle}>
      {/* 標題列 */}
      <div style={{ fontSize: 9, fontWeight: 700, marginBottom: 2 }}>
        訪客聊天室
      </div>

      {/* 訊息列表 */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          marginBottom: 5,
          display: "flex",
          flexDirection: "column",
          gap: 8,          
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: msg.sender === "me" ? "flex-end" : "flex-start",
              gap: 4, // ← 縮小左右間距（泡泡與頭像距離）
              alignItems: "center", // 改為置中，讓泡泡與 avatar 中心對齊
            }}
          >
            {/* 頭像欄（暱稱以絕對定位顯示，不影響列高度） */}
            <div
              style={{
                width: 20, // ← 縮小頭像欄寬度，讓泡泡更靠近
                boxSizing: "border-box",
                position: "relative", // 供暱稱絕對定位
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  cursor: "pointer", // 可點擊打開人物資訊
                }}
               onClick={() => {
                 setSelectedUser({ nickname: msg.nickname, avatar: msg.avatar });
                 setShowProfile(true);
               }}
              >
                {isNaN(Number(msg.avatar)) ? (
                  msg.avatar ? (
                    <img src={msg.avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : null
                ) : (
                  msg.avatar
                )}
              </div>

              {/* 暱稱：絕對定位在頭像下方，不會影響泡泡對齊 */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: "calc(100% + 2px)", // ← 間距由 6px 改成 4px，改更小就用 2px 或 0px
                  fontSize: 8,
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.9)",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  pointerEvents: "none",
                }}
              >
                {msg.nickname}
              </div>
            </div>

            {/* 泡泡：垂直置中（會與 avatar 中心對齊） */}
            <div
              style={{
                background: msg.sender === "me" ? "rgba(206, 138, 106, 0.85)" : "rgba(255,255,255,0.08)",
                padding: "6px 10px",
                borderRadius: 6,
                maxWidth: "70%",
                wordBreak: "break-word",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 9, lineHeight: 1.0 }}>{msg.text}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 輸入框 */}
      <div style={{ display: "flex", gap: 6 }}>
        <input
          type="text"
          placeholder="輸入訊息..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          style={{
            flex: 1,
            fontSize: 9,
            border: "none",
            outline: "none",
            padding: 8,
            borderRadius: 6,
            background: "rgba(255,255,255,0.06)",
            color: "white",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "8px 10px",
            fontSize: 9,
            cursor: "pointer",
            border: "none",
            borderRadius: 6,
            backgroundColor: "#6c4b2a",
            color: "white",
          }}
        >
          送出
        </button>
      </div>
    </div>
  );

  if (!mounted || typeof document === "undefined") return null;

  // 以 portal 渲染 modal（避免被 ancestor transform 影響）
  return (
    <>
      {usePortal ? ReactDOM.createPortal(jsx, document.body) : jsx}
      {showProfile && selectedUser &&
        ReactDOM.createPortal(
          <ProfileModal user={selectedUser} onClose={() => setShowProfile(false)} />,
          document.body
        )
      }
    </>
  );
}



