import Link from "next/link";

export default function ReactNodePost() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-bold">
            Memory Lane
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold text-purple-300 hover:text-purple-200"
          >
            All Posts
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
          Web Development
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
          Connecting React and Node.js
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-400">
          What building a full-stack application taught me about how the
          frontend, backend, API, and database work together.
        </p>

        <div className="mt-12 space-y-7 text-lg leading-8 text-slate-300">
          <p>
            Recently, I built a full-stack application using React for the
            frontend and Node.js with Express for the backend. This helped me
            see how different parts of an application communicate with each
            other.
          </p>

          <p>
            On the frontend, React handled what the user could see and interact
            with. Axios allowed the application to send requests to my backend
            API. On the server, Express handled those requests and communicated
            with MongoDB to retrieve or update data.
          </p>

          <p>
            One of the biggest lessons was understanding that a problem on the
            screen does not always mean the problem is in React. Sometimes the
            issue may be the API route, the server response, the database, or
            even the shape of the returned data.
          </p>

          <p>
            This project made full-stack development feel less mysterious.
            Instead of seeing the frontend and backend as completely separate,
            I now understand them as parts of one system that must communicate
            clearly with each other.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <Link
            href="/posts/unity-rhythm-game"
            className="font-semibold text-purple-300 hover:text-purple-200"
          >
            ← Previous Post
          </Link>

          <Link
            href="/posts/nextjs-github-pages"
            className="rounded-full bg-purple-500 px-6 py-3 font-semibold transition hover:bg-purple-400"
          >
            Next Post →
          </Link>
        </div>
      </article>
    </main>
  );
}