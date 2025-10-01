module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/my-game-site/app/about/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-game-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AboutPage() {
    const bg = "url('/game_07.png')";
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastMouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseCooldown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const BASE_WIDTH = 600;
    const BASE_HEIGHT = 340;
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loggedIn, setLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        department: "",
        name: "",
        nickname: "",
        avatar: "/avatar1.png"
    });
    // 1. 登入時寫入 localStorage
    // localStorage.setItem("mygame_loggedIn", "true");
    // localStorage.setItem("mygame_user", JSON.stringify(formData));
    // 2. 每個頁面初始化時讀取
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loggedIn = localStorage.getItem("mygame_loggedIn") === "true";
        const user = localStorage.getItem("mygame_user");
        if (loggedIn && user) {
            setLoggedIn(true);
            setFormData(JSON.parse(user));
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = scrollRef.current;
        if (!el) return;
        const onWheel = (e)=>{
            // 只攔截主要的垂直滾动並轉成水平滾动
            if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
            e.preventDefault();
            el.scrollBy({
                left: e.deltaY,
                behavior: "auto"
            });
        };
        el.addEventListener("wheel", onWheel, {
            passive: false
        });
        return ()=>el.removeEventListener("wheel", onWheel);
    }, []);
    // 進入頁面時確保滾動位置在第一個區塊（section1）
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = scrollRef.current;
        if (!el) return;
        el.scrollTo({
            left: 0,
            behavior: "auto"
        });
    }, []);
    // 當滑鼠靠右邊界時，自動平滑滾到最後一個區塊（section2）
    const hasScrolledRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = scrollRef.current;
        if (!el) return;
        const THRESHOLD = 24;
        const COOLDOWN_MS = 800;
        let lastScrollTime = 0;
        let lastDirection = null;
        const onMouseMove = (e)=>{
            if (Date.now() - lastScrollTime < COOLDOWN_MS) return;
            const atRight = el.scrollLeft >= el.scrollWidth - el.clientWidth - 20;
            const atLeft = (el.scrollLeft ?? 0) < 20;
            // 靠右邊界且還沒在最右側
            if (e.clientX >= window.innerWidth - THRESHOLD && !atRight && lastDirection !== "right") {
                el.scrollTo({
                    left: el.scrollWidth,
                    behavior: "smooth"
                });
                lastScrollTime = Date.now();
                lastDirection = "right";
                return;
            }
            // 靠左邊界且還沒在最左側
            if (e.clientX <= THRESHOLD && !atLeft && lastDirection !== "left") {
                el.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
                lastScrollTime = Date.now();
                lastDirection = "left";
                return;
            }
            // 離開邊界時重設方向
            if (e.clientX > THRESHOLD && e.clientX < window.innerWidth - THRESHOLD) {
                lastDirection = null;
            }
        };
        window.addEventListener("mousemove", onMouseMove);
        return ()=>window.removeEventListener("mousemove", onMouseMove);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateScale = ()=>{
            const scaleX = window.innerWidth / BASE_WIDTH;
            const scaleY = window.innerHeight / BASE_HEIGHT;
            setScale(Math.min(scaleX, scaleY, 1)); // 不會超過 1
        };
        updateScale();
        window.addEventListener("resize", updateScale);
        return ()=>window.removeEventListener("resize", updateScale);
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
    const HOVER_OFFSET = 0; // 不再根據 hover 改变
    // 新增 hover 狀態
    const [section2Hover, setSection2Hover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: floatKeyframes
            }, void 0, false, {
                fileName: "[project]/my-game-site/app/about/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: section2FloatKeyframes
            }, void 0, false, {
                fileName: "[project]/my-game-site/app/about/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                ref: scrollRef,
                style: {
                    minHeight: "100vh",
                    width: "100%",
                    position: "relative",
                    overflowX: "auto",
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                    scrollBehavior: "smooth",
                    backgroundColor: "#000"
                },
                "aria-hidden": false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            objectFit: "cover",
                            zIndex: 0,
                            pointerEvents: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/background.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/my-game-site/app/about/page.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            "您的瀏覽器不支援影片播放。"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-game-site/app/about/page.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            background: "rgba(0,0,0,0.45)",
                            zIndex: 1,
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/about/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "game08-wrap",
                        style: {
                            position: "absolute",
                            top: "52%",
                            left: "50%",
                            // 同時平移與縮放：保持在原本視覺位置，縮放時位置不變
                            transform: `translate(-100%, -150%) scale(${scale})`,
                            transformOrigin: "center center",
                            width: BASE_WIDTH,
                            height: BASE_HEIGHT,
                            zIndex: 4,
                            pointerEvents: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/game_08.png",
                                alt: "遊戲研究社",
                                style: {
                                    width: "70%",
                                    height: "70%",
                                    objectFit: "contain",
                                    filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.18))",
                                    pointerEvents: "none",
                                    display: "block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/my-game-site/app/about/page.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    right: -200,
                                    bottom: -200,
                                    zIndex: 6,
                                    pointerEvents: "auto",
                                    transformOrigin: "center center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.location.href = "/",
                                    "aria-label": "回首頁",
                                    style: {
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        color: "white",
                                        padding: "10px 16px",
                                        borderRadius: 8,
                                        cursor: "pointer",
                                        fontSize: 14
                                    },
                                    children: "回首頁"
                                }, void 0, false, {
                                    fileName: "[project]/my-game-site/app/about/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-game-site/app/about/page.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-game-site/app/about/page.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            height: "100vh",
                            width: "00vw",
                            gap: "20vw"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                style: {
                                    minWidth: "100vw",
                                    height: "100vh",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingRight: "12vw",
                                    boxSizing: "border-box",
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                        children: `
              @keyframes arrowPulse {
                0%   { transform: translateX(0); opacity: 1; }
                50%  { transform: translateX(8px); opacity: 0.85; }
                100% { transform: translateX(16px); opacity: 0.6; }
              }
            `
                                    }, void 0, false, {
                                        fileName: "[project]/my-game-site/app/about/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "aria-hidden": "true",
                                        style: {
                                            position: "absolute",
                                            right: 150,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            zIndex: 10,
                                            pointerEvents: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "44",
                                            height: "44",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "1.6",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            style: {
                                                display: "block",
                                                willChange: "transform, opacity",
                                                animation: "arrowPulse 1.2s ease-in-out infinite",
                                                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.25))"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 12h14"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-game-site/app/about/page.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 6l8 6-8 6"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-game-site/app/about/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-game-site/app/about/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-game-site/app/about/page.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                                children: `
                @keyframes containerFloatRight {
                  0% { transform: translate(-50%, -50%) scale(1); }
                  50% { transform: translate(calc(-50% + 10px), calc(-50% - 6px)) scale(1.02); }
                  100% { transform: translate(-50%, -50%) scale(1); }
                }
              `
                                            }, void 0, false, {
                                                fileName: "[project]/my-game-site/app/about/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseEnter: ()=>setHover(true),
                                                onMouseLeave: ()=>setHover(false),
                                                style: {
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                    zIndex: 6,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    gap: 12,
                                                    background: "rgba(255,255,255,0.02)",
                                                    padding: "clamp(16px, 2.5vw, 32px)",
                                                    borderRadius: 16,
                                                    width: "min(80vw, 720px)",
                                                    boxSizing: "border-box",
                                                    pointerEvents: "auto",
                                                    textAlign: "center",
                                                    transition: "box-shadow 220ms ease",
                                                    willChange: "transform, box-shadow",
                                                    boxShadow: hover ? "0 20px 40px rgba(0,0,0,0.35)" : "none",
                                                    animation: hover ? "containerFloatRight 3s ease-in-out infinite alternate" : "none"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: "white",
                                                        fontSize: "14px",
                                                        lineHeight: 1.6,
                                                        textAlign: "left",
                                                        // 保留原本往右浮動的內文動畫
                                                        animation: hover ? "livelyFloat 3s ease-in-out infinite alternate" : "none",
                                                        willChange: "transform"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: 0,
                                                                textAlign: "left"
                                                            },
                                                            children: "遊戲研究社從 2025 年開始，加入更多遊戲元素與活動。"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-game-site/app/about/page.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: "8px 0 0 0",
                                                                textAlign: "left"
                                                            },
                                                            children: "目前有 Switch、桌遊、玩具版斗城玩具槍等內容。"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-game-site/app/about/page.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: "8px 0 0 0",
                                                                textAlign: "left"
                                                            },
                                                            children: "未來會陸續增加更多元的遊戲品項與活動。"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-game-site/app/about/page.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: "8px 0 0 0",
                                                                textAlign: "left"
                                                            },
                                                            children: "每月舉辦主題日與小競賽，冠軍有小獎勵，歡迎參加！"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-game-site/app/about/page.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-game-site/app/about/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/my-game-site/app/about/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-game-site/app/about/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-game-site/app/about/page.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                style: {
                                    minWidth: "100vw",
                                    height: "100vh",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    paddingLeft: "30vw",
                                    boxSizing: "border-box",
                                    zIndex: 9999
                                },
                                // 滑鼠移入/移出時切換 hover 狀態
                                onMouseEnter: ()=>setSection2Hover(true),
                                onMouseLeave: ()=>setSection2Hover(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 36,
                                        background: "rgba(255,255,255,0.02)",
                                        padding: 24,
                                        borderRadius: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/game_09.png",
                                            alt: "活動形象",
                                            style: {
                                                width: 360,
                                                height: "auto",
                                                borderRadius: 8,
                                                boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                                                background: "#222",
                                                objectFit: "cover",
                                                animation: section2Hover ? "section2Float 2.8s ease-in-out infinite" : "none"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/my-game-site/app/about/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 16,
                                                position: "relative",
                                                minWidth: 260,
                                                minHeight: 140,
                                                justifyContent: "flex-start",
                                                animation: section2Hover ? "section2Float 2.8s ease-in-out infinite 0.5s" : "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: "white",
                                                        margin: 0,
                                                        fontSize: 22,
                                                        fontWeight: 700
                                                    },
                                                    children: "歡迎加入我們"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-game-site/app/about/page.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: "white",
                                                        margin: 0,
                                                        fontSize: 15,
                                                        lineHeight: 1.6
                                                    },
                                                    children: [
                                                        "想參加更多精彩活動嗎？",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/my-game-site/app/about/page.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 30
                                                        }, this),
                                                        "快來報名加入遊戲研究社，一起體驗各種有趣的遊戲與活動！"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-game-site/app/about/page.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/register",
                                                    style: {
                                                        position: "absolute",
                                                        right: 0,
                                                        bottom: -150,
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
                                                        animation: "none"
                                                    },
                                                    children: "活動報名"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-game-site/app/about/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-game-site/app/about/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-game-site/app/about/page.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-game-site/app/about/page.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-game-site/app/about/page.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$game$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        id: "myCanvas",
                        width: "400",
                        height: "300"
                    }, void 0, false, {
                        fileName: "[project]/my-game-site/app/about/page.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-game-site/app/about/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/my-game-site/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/my-game-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/my-game-site/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/my-game-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/my-game-site/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__079b0e8d._.js.map