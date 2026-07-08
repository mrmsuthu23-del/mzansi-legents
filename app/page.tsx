export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, green, gold, black)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        🇿🇦 Mzansi Legents 🇿🇦
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Welcome to the ultimate South African quiz game!
      </p>

      <button
        style={{
          padding: "15px 30px",
          fontSize: "20px",
          borderRadius: "10px",
          border: "none",
          marginBottom: "15px",
          cursor: "pointer",
        }}
      >
        🎮 Play Game
      </button>

      <button
        style={{
          padding: "15px 30px",
          fontSize: "20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        🏆 Leaderboard
      </button>
    </main>
  );
}
