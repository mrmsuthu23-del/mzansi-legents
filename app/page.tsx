import Link from "next/link";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-700 via-yellow-400 to-black text-white p-6">
            <h1 className="text-5xl font-bold mb-4">
                    🇿🇦 Mzansi Legents 🇿🇦
                          </h1>

                                <p className="text-xl mb-8 text-center">
                                        The Ultimate South African Quiz Game
                                              </p>

                                                    <Link
                                                            href="/login"
                                                                    className="bg-green-600 px-8 py-4 rounded-xl font-bold mb-4"
                                                                          >
                                                                                  🎮 Login to Play
                                                                                        </Link>

                                                                                              <Link
                                                                                                      href="/register"
                                                                                                              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold mb-4"
                                                                                                                    >
                                                                                                                            📝 Create Account
                                                                                                                                  </Link>

                                                                                                                                        <button className="bg-white text-black px-8 py-4 rounded-xl font-bold">
                                                                                                                                                🏆 Leaderboard
                                                                                                                                                      </button>

                                                                                                                                                            <p className="mt-8">
                                                                                                                                                                    Made in South Africa 🇿🇦
                                                                                                                                                                          </p>
                                                                                                                                                                              </main>
                                                                                                                                                                                );
                                                                                                                                                                                }export default function Home() {
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
