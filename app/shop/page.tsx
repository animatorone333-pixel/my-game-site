// app/shop/page.tsx

export default function ShopPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111", // 暫時用深色背景，之後你可以換成圖片
        color: "white",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>🛒 推薦購買</h1>
      <p style={{ marginBottom: "30px" }}>
        這裡可以放遊戲研究社推薦購買的桌遊清單 ✨
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>🎲 卡坦島</li>
        <li style={{ margin: "10px 0" }}>🃏 UNO</li>
        <li style={{ margin: "10px 0" }}>🏰 狼人殺</li>
      </ul>
    </main>
  );
}
