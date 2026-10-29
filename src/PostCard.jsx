import React, { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <article
      onClick={() => setClicked((prev) => !prev)}
      className={`h-full cursor-pointer rounded-xl border p-5 shadow-sm transition-all duration-200 hover:shadow-md ${
        clicked
          ? "border-blue-200 bg-blue-100"
          : "border-slate-200 bg-white"
      }`}
    >
      <h2 className="mb-3 text-lg font-semibold text-slate-800">{title}</h2>
      <p className="text-sm leading-6 text-slate-600">{body}</p>
    </article>
  );
}

export default PostCard;
