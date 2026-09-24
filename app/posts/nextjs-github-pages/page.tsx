import Link from "next/link";

export default function NextGitHubPagesPost() {
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
          Deploying Next.js with GitHub Pages
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-400">
          What I learned about static sites, build configuration, GitHub
          Actions, and turning local code into a live website.
        </p>

        <div className="mt-12 space-y-7 text-lg leading-8 text-slate-300">
          <p>
            Deploying a website helped me understand the difference between a
            project that works locally and one that is actually available on
            the web. A site can work perfectly on localhost but still need
            additional configuration before it can be deployed.
          </p>

          <p>
            Using Next.js taught me about static export and how pages can be
            generated as static files. I also learned that GitHub Pages needs
            the correct project path so that styles, scripts, and other assets
            load properly after deployment.
          </p>

          <p>
            GitHub Actions was one of the most useful parts of the process. The
            workflow automatically installs dependencies, builds the project,
            and publishes the generated files whenever new code is pushed.
          </p>

          <p>
            My biggest takeaway is that deployment is part of development, not
            something separate from it. Testing the live version, checking
            build errors, and making sure every link works are all important
            steps in finishing a project.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
  <Link
    href="/posts/react-node-full-stack"
    className="font-semibold text-purple-300 hover:text-purple-200"
  >
    ← Previous Post
  </Link>

  <Link
    href="/posts/building-a-crud-api"
    className="rounded-full bg-purple-500 px-6 py-3 font-semibold transition hover:bg-purple-400"
  >
    Next Post →
  </Link>
</div>
      </article>
    </main>
  );
}