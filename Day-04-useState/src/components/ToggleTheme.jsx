import { useState } from "react";

function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className="card"
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h2>Theme Toggle</h2>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default ToggleTheme;