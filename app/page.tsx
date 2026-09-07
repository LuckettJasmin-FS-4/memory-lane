"use client";

import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    title: "Building My First Unity Rhythm Game",
    category: "Game Development",
    excerpt:
      "What I learned while creating Teddy Band, a 2D rhythm game with scoring, combos, lives, battles, and interactive note patterns.",
    href: "/posts/unity-rhythm-game",
  },
  {
    title: "Connecting React and Node.js",
    category: "Web Development",
    excerpt:
      "A reflection on building a full-stack application and learning how the frontend, backend, API, and database work together.",
    href: "/posts/react-node-full-stack",
  },
  {
    title: "Deploying Next.js with GitHub Pages",
    category: "Web Development",
    excerpt:
      "What I learned about static websites, GitHub Actions, deployment workflows, and turning local code into a live website.",
    href: "/posts/nextjs-github-pages",
  },
];

export default function Home() {
  const [filter, setFilter] = useState("All");

  const filteredPosts =
    filter === "All"
      ? posts
      : posts.filter((post) => post.category === filter);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <h1 className="text-3xl font-bold tracking-tight">Memory Lane</h1>
          <p className="mt-2 text-slate-400">
            Notes from my journey becoming a developer.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
            Developer Journal
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
            LEARNING ONE PROJECT AT A TIME.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Memory Lane is where I reflect on projects, challenges, and lessons
            from my studies in Web Development and my own personal studies in Game Development.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {["All", "Game Development", "Web Development"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === category
                  ? "bg-purple-500 text-white"
                  : "bg-white/10 text-slate-300 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.href}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <p className="text-sm font-semibold text-purple-300">
                {post.category}
              </p>

              <h3 className="mt-4 text-2xl font-bold">{post.title}</h3>

              <p className="mt-4 flex-1 leading-7 text-slate-300">
                {post.excerpt}
              </p>

              <Link
                href={post.href}
                className="mt-7 font-semibold text-purple-300 hover:text-purple-200"
              >
                Read post →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-400">
          Memory Lane • Developer Journal
        </div>
      </footer>
    </main>
  );
}