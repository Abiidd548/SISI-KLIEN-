import React, { useEffect, useState } from "react";
import PostCard from "./PostCard.jsx";
import { getPosts } from "./Services.jsx";

function Exercise() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data post:", error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-blue-700">
          Post Cards
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exercise;