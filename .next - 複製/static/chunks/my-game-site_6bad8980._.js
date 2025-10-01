(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-game-site/app/components/ProfileModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ProfileModal(param) {
    let { user, onClose } = param;
    _s();
    const designWidth = 720; // 設計稿寬度（game_05 的基準寬度）
    const [designHeight, setDesignHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(480); // 會在下方用 image natural ratio 更新
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // 讀取圖片 natural ratio，取得 designHeight
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileModal.useEffect": ()=>{
            const img = new Image();
            img.src = "/game_05.png";
            img.onload = ({
                "ProfileModal.useEffect": ()=>{
                    if (img.naturalWidth && img.naturalHeight) {
                        setDesignHeight(Math.round(designWidth * img.naturalHeight / img.naturalWidth));
                    }
                }
            })["ProfileModal.useEffect"];
        }
    }["ProfileModal.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileModal.useEffect": ()=>{
            const calc = {
                "ProfileModal.useEffect.calc": ()=>{
                    if (!wrapperRef.current) return;
                    // 根據視窗寬高同時限制 scale，避免只以寬度縮放造成超出高度
                    const maxW = window.innerWidth * 0.92;
                    const maxH = window.innerHeight * 0.92;
                    const s = Math.min(1, maxW / designWidth, maxH / designHeight);
                    setScale(s);
                }
            }["ProfileModal.useEffect.calc"];
            calc();
            window.addEventListener("resize", calc);
            return ({
                "ProfileModal.useEffect": ()=>window.removeEventListener("resize", calc)
            })["ProfileModal.useEffect"];
        }
    }["ProfileModal.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileModal.useEffect": ()=>{
            const onKey = {
                "ProfileModal.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["ProfileModal.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "ProfileModal.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["ProfileModal.useEffect"];
        }
    }["ProfileModal.useEffect"], [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClose,
        style: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 60000,
            padding: 20
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: (e)=>e.stopPropagation(),
            ref: wrapperRef,
            style: {
                transformOrigin: "center center",
                // 用 flex 置中縮放後的 inner 容器
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: designWidth,
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
                    background: "#111",
                    color: "white",
                    position: "relative",
                    transform: "scale(".concat(scale, ")"),
                    transformOrigin: "center center",
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/game_05.png",
                        alt: "人物資訊",
                        style: {
                            width: "100%",
                            display: "block",
                            objectFit: "cover"
                        }
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 88,
                            left: 290,
                            width: 50,
                            height: 50,
                            borderRadius: 8,
                            overflow: "hidden",
                            background: "#333"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/game_06.png",
                            alt: "avatar",
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 105,
                            left: 350,
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#fff",
                            whiteSpace: "nowrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: (user === null || user === void 0 ? void 0 : user.profession) || "職業未設定"
                            }, void 0, false, {
                                fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            typeof (user === null || user === void 0 ? void 0 : user.loginDays) === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "rgba(255,255,255,0.95)",
                                    fontWeight: 600
                                },
                                children: [
                                    "\u00A0・\u00A0",
                                    "登入 ",
                                    user.loginDays,
                                    " 天"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: 88,
                            left: 55,
                            width: 200,
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "white"
                        },
                        children: (user === null || user === void 0 ? void 0 : user.nickname) || "訪客"
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            right: 20,
                            bottom: 20
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                background: "rgba(0,0,0,0.6)",
                                color: "white",
                                border: "1px solid rgba(255,255,255,0.06)",
                                padding: "8px 12px",
                                borderRadius: 8,
                                cursor: "pointer"
                            },
                            children: "關閉"
                        }, void 0, false, {
                            fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-game-site/app/components/ProfileModal.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ProfileModal, "+HUpK/U3V8ciPIXnbqlEVVexQPY=");
_c = ProfileModal;
var _c;
__turbopack_context__.k.register(_c, "ProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-game-site/app/components/ChatBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$app$2f$components$2f$ProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/app/components/ProfileModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
let guestCounter = 1; // 全域路人計數器
function ChatBox(param) {
    let { currentUser, portalScale = 1, usePortal = true, left = "24px", bottom = "40px", top, right, width = 200, height = 200, bubbleMinHeight = 36, bubbleVerticalPadding = 6 } = param;
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 正確：把這兩個 useState 移到組件內
    const [showProfile, setShowProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 新增：在 client mount 後標記已 mount，允許 portal 渲染
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatBox.useEffect": ()=>{
            setMounted(true);
        }
    }["ChatBox.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatBox.useEffect": ()=>{
            var _messagesEndRef_current;
            (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["ChatBox.useEffect"], [
        messages
    ]);
    const handleSend = ()=>{
        if (input.trim() === "") return;
        let nickname = "路人";
        let avatar = "";
        if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.loggedIn) {
            nickname = currentUser.nickname || "訪客";
            avatar = currentUser.avatar || "😀";
        } else {
            nickname = "路人".concat(guestCounter);
            avatar = "".concat(guestCounter); // 數字直接當頭像
            guestCounter++;
        }
        setMessages((prev)=>[
                ...prev,
                {
                    text: input.trim(),
                    sender: "me",
                    nickname,
                    avatar
                }
            ]);
        setInput("");
    };
    const baseStyle = {
        zIndex: 30000,
        background: "rgba(0,0,0,0.6)",
        borderRadius: 5,
        border: "1px solid rgba(255,255,255,0.08)",
        padding: 8,
        color: "white",
        fontSize: 11,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
        backdropFilter: "blur(4px)",
        boxSizing: "border-box"
    };
    const portalStyle = {
        position: "fixed",
        left: left,
        bottom: bottom,
        top: top,
        right: right,
        transform: "scale(".concat(portalScale, ")"),
        transformOrigin: "left bottom",
        willChange: "transform",
        width,
        height,
        ...baseStyle
    };
    const inlineStyle = {
        position: "absolute",
        left: left,
        bottom: bottom,
        top: top,
        right: right,
        transform: "none",
        width,
        height,
        ...baseStyle
    };
    const jsx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chatbox-portal",
        style: usePortal ? portalStyle : inlineStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 9,
                    fontWeight: 700,
                    marginBottom: 2
                },
                children: "訪客聊天室"
            }, void 0, false, {
                fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: "auto",
                    marginBottom: 5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                children: [
                    messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: msg.sender === "me" ? "flex-end" : "flex-start",
                                gap: 4,
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 20,
                                        boxSizing: "border-box",
                                        position: "relative",
                                        flexShrink: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 18,
                                                height: 18,
                                                borderRadius: "50%",
                                                overflow: "hidden",
                                                background: "gray",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: "bold",
                                                cursor: "pointer"
                                            },
                                            onClick: ()=>{
                                                setSelectedUser({
                                                    nickname: msg.nickname,
                                                    avatar: msg.avatar
                                                });
                                                setShowProfile(true);
                                            },
                                            children: isNaN(Number(msg.avatar)) ? msg.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: msg.avatar,
                                                alt: "avatar",
                                                style: {
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                                                lineNumber: 183,
                                                columnNumber: 21
                                            }, this) : null : msg.avatar
                                        }, void 0, false, {
                                            fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                top: "calc(100% + 2px)",
                                                fontSize: 8,
                                                lineHeight: 1,
                                                color: "rgba(255,255,255,0.9)",
                                                whiteSpace: "nowrap",
                                                textAlign: "center",
                                                pointerEvents: "none"
                                            },
                                            children: msg.nickname
                                        }, void 0, false, {
                                            fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: msg.sender === "me" ? "rgba(206, 138, 106, 0.85)" : "rgba(255,255,255,0.08)",
                                        padding: "6px 10px",
                                        borderRadius: 6,
                                        maxWidth: "70%",
                                        wordBreak: "break-word",
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 9,
                                            lineHeight: 1.0
                                        },
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "輸入訊息...",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleSend();
                            }
                        },
                        style: {
                            flex: 1,
                            fontSize: 9,
                            border: "none",
                            outline: "none",
                            padding: 8,
                            borderRadius: 6,
                            background: "rgba(255,255,255,0.06)",
                            color: "white"
                        }
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSend,
                        style: {
                            padding: "8px 10px",
                            fontSize: 9,
                            cursor: "pointer",
                            border: "none",
                            borderRadius: 6,
                            backgroundColor: "#6c4b2a",
                            color: "white"
                        },
                        children: "送出"
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
    if (!mounted || typeof document === "undefined") return null;
    // 以 portal 渲染 modal（避免被 ancestor transform 影響）
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            usePortal ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(jsx, document.body) : jsx,
            showProfile && selectedUser && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$app$2f$components$2f$ProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                user: selectedUser,
                onClose: ()=>setShowProfile(false)
            }, void 0, false, {
                fileName: "[project]/my-game-site/app/components/ChatBox.tsx",
                lineNumber: 278,
                columnNumber: 11
            }, this), document.body)
        ]
    }, void 0, true);
}
_s(ChatBox, "rPwRrdknxYXUBB6oa+iuiVS748M=");
_c = ChatBox;
var _c;
__turbopack_context__.k.register(_c, "ChatBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-game-site/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$app$2f$components$2f$ChatBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/app/components/ChatBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$app$2f$components$2f$ProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/app/components/ProfileModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [offsetX, setOffsetX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [offsetY, setOffsetY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showLogin, setShowLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 一開始不顯示登入視窗
    const [loggedIn, setLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 一開始不顯示頭像
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        department: "",
        name: "",
        nickname: "",
        avatar: "/avatar1.png"
    });
    const [showProfile, setShowProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profileUser, setProfileUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // 新增：全域登入使用者狀態
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nickname: "",
        avatar: "",
        loggedIn: false
    });
    // 職業列表
    const professions = [
        "薪水小偷",
        "動物管理員",
        "總統",
        "垃圾車",
        "無敵星星",
        "神射手",
        "老闆",
        "愛情顧問",
        "低調宅宅",
        "瞌睡蟲",
        "哭哭",
        "香菇",
        "貓咪",
        "狗狗",
        "社畜",
        "主管",
        "法師",
        "獵人",
        "戰士",
        "盜賊",
        "牧師",
        "聖騎士",
        "德魯伊",
        "薩滿"
    ];
    const [jobIndex, setJobIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loginDays, setLoginDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const updateScale = {
                "Home.useEffect.updateScale": ()=>{
                    const baseWidth = 1280;
                    const baseHeight = 720;
                    const scaleX = window.innerWidth / baseWidth;
                    const scaleY = window.innerHeight / baseHeight;
                    const scale = Math.max(scaleX, scaleY);
                    setScale(scale);
                    setOffsetX((window.innerWidth - baseWidth * scale) / 2);
                    setOffsetY((window.innerHeight - baseHeight * scale) / 2);
                }
            }["Home.useEffect.updateScale"];
            updateScale();
            window.addEventListener("resize", updateScale);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("resize", updateScale)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const handlePrevJob = ()=>{
        setJobIndex((prev)=>(prev - 1 + professions.length) % professions.length);
    };
    const handleNextJob = ()=>{
        setJobIndex((prev)=>(prev + 1) % professions.length);
    };
    const handleLogin = async ()=>{
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    profession: professions[jobIndex],
                    loginDays
                })
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
                    loggedIn: true
                });
            }
        } catch (err) {
            console.error("登入失敗", err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            width: "100vw",
            height: "100vh",
            backgroundImage: "url('/game_00.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    filter: showProfile ? "blur(6px) saturate(0.9)" : "none",
                    transition: "filter 200ms ease"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "1280px",
                            height: "720px",
                            position: "absolute",
                            top: "".concat(offsetY, "px"),
                            left: "".concat(offsetX, "px"),
                            transform: "scale(".concat(scale, ")"),
                            transformOrigin: "top left"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/game_00.png",
                                alt: "背景",
                                style: {
                                    position: "absolute",
                                    width: "1280px",
                                    height: "720px",
                                    top: 0,
                                    left: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/my-game-site/app/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "110px",
                                    left: "360px",
                                    width: "560px",
                                    zIndex: 999
                                }
                            }, void 0, false, {
                                fileName: "[project]/my-game-site/app/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$app$2f$components$2f$ChatBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                currentUser: currentUser,
                                usePortal: false,
                                left: "50px",
                                bottom: "198px",
                                width: 280,
                                height: 148,
                                bubbleMinHeight: 32,
                                bubbleVerticalPadding: 6
                            }, void 0, false, {
                                fileName: "[project]/my-game-site/app/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            loggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            // 登出處理（維持原有行為）
                                            setLoggedIn(false);
                                            setShowProfile(false);
                                            setProfileUser(undefined);
                                            setCurrentUser({
                                                nickname: "",
                                                avatar: "",
                                                loggedIn: false
                                            });
                                            setFormData({
                                                department: "",
                                                name: "",
                                                nickname: "",
                                                avatar: "/avatar1.png"
                                            });
                                            setShowLogin(false);
                                        },
                                        style: {
                                            position: "absolute",
                                            top: 20,
                                            right: 40,
                                            background: "rgba(0,0,0,0.6)",
                                            color: "white",
                                            padding: "6px 10px",
                                            borderRadius: 6,
                                            border: "1px solid rgba(255,255,255,0.12)",
                                            cursor: "pointer",
                                            fontWeight: 700,
                                            fontSize: 14,
                                            zIndex: 9999
                                        },
                                        children: "Log out"
                                    }, void 0, false, {
                                        fileName: "[project]/my-game-site/app/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: 64,
                                            right: 40,
                                            width: 125,
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
                                            pointerEvents: "auto"
                                        },
                                        children: [
                                            currentUser
                                        ].filter((u)=>{
                                            var _u_loggedIn;
                                            return !!u && ((_u_loggedIn = u.loggedIn) !== null && _u_loggedIn !== void 0 ? _u_loggedIn : loggedIn);
                                        }).map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 28,
                                                            height: 28,
                                                            borderRadius: "50%",
                                                            overflow: "hidden",
                                                            background: "#333",
                                                            flexShrink: 0
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: (u === null || u === void 0 ? void 0 : u.avatar) || formData.avatar,
                                                            alt: "avatar",
                                                            style: {
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover",
                                                                display: "block"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-game-site/app/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-game-site/app/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: "white",
                                                            fontSize: 10,
                                                            fontWeight: 700,
                                                            whiteSpace: "nowrap",
                                                            textOverflow: "ellipsis",
                                                            overflow: "hidden",
                                                            maxWidth: 76
                                                        },
                                                        children: (u === null || u === void 0 ? void 0 : u.nickname) || formData.nickname || "訪客"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-game-site/app/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/my-game-site/app/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/my-game-site/app/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-game-site/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/my-game-site/app/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            showProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$app$2f$components$2f$ProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                user: profileUser,
                onClose: ()=>{
                    setShowProfile(false);
                    setProfileUser(undefined);
                }
            }, void 0, false, {
                fileName: "[project]/my-game-site/app/page.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this),
            !loggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowLogin(true),
                style: {
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
                    zIndex: 9999
                },
                children: "LOG IN"
            }, void 0, false, {
                fileName: "[project]/my-game-site/app/page.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this),
            showLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.35)",
                    zIndex: 9999
                },
                onClick: ()=>setShowLogin(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    style: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "434px",
                        height: "302px",
                        backgroundImage: "url('/login_bg.png')",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/close.png",
                            alt: "Close",
                            onClick: ()=>setShowLogin(false),
                            style: {
                                position: "absolute",
                                top: "15px",
                                right: "30px",
                                width: "36px",
                                height: "32px",
                                cursor: "pointer",
                                zIndex: 2
                            }
                        }, void 0, false, {
                            fileName: "[project]/my-game-site/app/page.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: "83px",
                                left: "53%",
                                transform: "translateX(-50%)",
                                width: "300px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "black",
                                fontSize: "15px",
                                fontWeight: "bold",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePrevJob,
                                    style: {
                                        position: "absolute",
                                        left: "82px",
                                        top: "18px",
                                        width: "30px",
                                        height: "30px",
                                        background: "transparent",
                                        //border: "2px solid red",
                                        cursor: "pointer"
                                    },
                                    "aria-label": "Prev"
                                }, void 0, false, {
                                    fileName: "[project]/my-game-site/app/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: professions[jobIndex]
                                }, void 0, false, {
                                    fileName: "[project]/my-game-site/app/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNextJob,
                                    style: {
                                        position: "absolute",
                                        right: "48px",
                                        top: "18px",
                                        width: "30px",
                                        height: "30px",
                                        background: "transparent",
                                        //border: "2px solid red",
                                        cursor: "pointer"
                                    },
                                    "aria-label": "Next"
                                }, void 0, false, {
                                    fileName: "[project]/my-game-site/app/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-game-site/app/page.tsx",
                            lineNumber: 284,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: formData.department,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    department: e.target.value
                                }),
                            placeholder: "",
                            autoComplete: "off",
                            style: {
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
                                textAlign: "center"
                            }
                        }, void 0, false, {
                            fileName: "[project]/my-game-site/app/page.tsx",
                            lineNumber: 338,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: formData.name,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    name: e.target.value
                                }),
                            placeholder: "",
                            autoComplete: "off",
                            style: {
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
                                textAlign: "center"
                            }
                        }, void 0, false, {
                            fileName: "[project]/my-game-site/app/page.tsx",
                            lineNumber: 360,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: formData.nickname,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    nickname: e.target.value
                                }),
                            placeholder: "",
                            autoComplete: "off",
                            style: {
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
                                textAlign: "center"
                            }
                        }, void 0, false, {
                            fileName: "[project]/my-game-site/app/page.tsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogin,
                            style: {
                                position: "absolute",
                                left: "165px",
                                top: "252px",
                                width: "108px",
                                height: "38px",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer"
                            },
                            "aria-label": "OK"
                        }, void 0, false, {
                            fileName: "[project]/my-game-site/app/page.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-game-site/app/page.tsx",
                    lineNumber: 253,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-game-site/app/page.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this),
            loggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            // 登出：清除使用者狀態並關閉可能開啟的 modal / login
                            setLoggedIn(false);
                            setShowProfile(false);
                            setProfileUser(undefined);
                            setCurrentUser({
                                nickname: "",
                                avatar: "",
                                loggedIn: false
                            });
                            setFormData({
                                department: "",
                                name: "",
                                nickname: "",
                                avatar: "/avatar1.png"
                            });
                            setShowLogin(false);
                        },
                        style: {
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
                            zIndex: 9999
                        },
                        children: "Log out"
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/page.tsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 64,
                            right: 40,
                            width: 125,
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
                            transform: "scale(".concat(scale, ")"),
                            transformOrigin: "top right",
                            willChange: "transform",
                            pointerEvents: "auto"
                        },
                        children: [
                            currentUser
                        ].filter((u)=>{
                            var _u_loggedIn;
                            return !!u && ((_u_loggedIn = u.loggedIn) !== null && _u_loggedIn !== void 0 ? _u_loggedIn : loggedIn);
                        }).map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 28,
                                            height: 28,
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            background: "#333",
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: (u === null || u === void 0 ? void 0 : u.avatar) || formData.avatar,
                                            alt: "avatar",
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/my-game-site/app/page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-game-site/app/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 20
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: "white",
                                            fontSize: 10,
                                            fontWeight: 700,
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            overflow: "hidden",
                                            maxWidth: 76
                                        },
                                        children: (u === null || u === void 0 ? void 0 : u.nickname) || formData.nickname || "訪客"
                                    }, void 0, false, {
                                        fileName: "[project]/my-game-site/app/page.tsx",
                                        lineNumber: 485,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/my-game-site/app/page.tsx",
                                lineNumber: 481,
                                columnNumber: 18
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/page.tsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/my-game-site/app/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(Home, "gVX5Ju3IJ6ppxp+XW8ziKBfZ5eY=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-game-site/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/my-game-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/my-game-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/my-game-site/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=my-game-site_6bad8980._.js.map