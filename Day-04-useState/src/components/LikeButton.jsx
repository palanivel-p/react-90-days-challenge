import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <h2>Like Button</h2>

      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default LikeButton;