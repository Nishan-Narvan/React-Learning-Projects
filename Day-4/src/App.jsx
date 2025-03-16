import React, { useState, useEffect } from "react";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Scroll Progress Bar */}
      <div style={{ ...styles.progressBar, width: `${scrollProgress}%` }}></div>

      {/* Page Content */}
      <div style={styles.page}>
        {/* Warrior Image */}
        <img
          src="https://w.wallhaven.cc/full/d6/wallhaven-d66zvm.png"
          alt="Miyamoto Musashi"
          style={styles.image}
        />

        {/* Miyamoto Musashi's Story */}
        <div style={styles.story}>
          <h1>The Legend of Miyamoto Musashi</h1>
          <p>
            Miyamoto Musashi (1584–1645) was Japan’s greatest swordsman, philosopher, and strategist. His journey was filled with duels, self-discovery, and the pursuit of mastery.
          </p>
          <h2>1. Early Life and First Duel</h2>
          <p>
            - Born in Harima Province, Musashi trained from a young age under his samurai father.
            - At 13, he fought and won his first duel against Arima Kihei, a skilled swordsman.
          </p>
          <h2>2. The Niten Ichi-ryū Style</h2>
          <p>
            - Musashi developed a unique two-sword fighting style (Niten Ichi-ryū), using both the katana and wakizashi simultaneously.
            - This technique made him nearly invincible in combat.
          </p>
          <h2>3. Duel with Sasaki Kojirō</h2>
          <p>
            - His most famous battle was against Sasaki Kojirō, a highly skilled samurai known for his deadly "Swallow Cut."
            - Musashi arrived late to the duel, using a wooden sword he carved from an oar.
            - With a single precise strike, he defeated Kojirō, securing his legend.
          </p>
          <h2>4. The Warrior’s Philosophy</h2>
          <p>
            - Later in life, Musashi retired from dueling and wrote "The Book of Five Rings," detailing his philosophy on combat, discipline, and strategy.
            - His teachings emphasize adaptability, mental clarity, and mastery over oneself.
          </p>
          <h2>5. Legacy and Influence</h2>
          <p>
            - Musashi remains a symbol of the warrior spirit and strategic thinking.
            - His lessons are still studied by martial artists, military leaders, and business strategists worldwide.
          </p>
          <img
          src="https://w.wallhaven.cc/full/wy/wallhaven-wywor7.png"
          alt="Miyamoto Musashi"
          style={styles.image}></img>
        </div>
      </div>
    </>
  );
}

// ✅ Corrected Inline CSS
const styles = {
  progressBar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "5px",
    background: "red",
    zIndex: 1000,
    transition: "width 0.2s ease-out",
  },
  page: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#1a1a1a",
    color: "white",
    minHeight: "200vh", // Scrollable page
  },
  image: {
    width: "80%",
    maxWidth: "600px",
    borderRadius: "10px",
    margin: "20px 0",
  },
  story: {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "left",
    fontSize: "18px",
    lineHeight: "1.6",
  },
};

export default App;
