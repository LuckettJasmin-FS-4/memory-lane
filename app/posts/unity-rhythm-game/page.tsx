import Link from "next/link";

export default function UnityRhythmGamePost() {
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
          Game Development
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
          Building My First Unity Rhythm Game
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-400">
          What creating Teddy Band taught me about game logic, player feedback,
          and learning Unity one feature at a time.
        </p>

        <div className="mt-12 space-y-7 text-lg leading-8 text-slate-300">
          <p>
            One of the biggest projects I have been working on recently is my
            first Unity game, Teddy Band. It is a 2D rhythm game where the
            player competes against different teddy bear bands by following
            musical note patterns.
          </p>

          <p>
            Building the game has helped me understand that game development is
            much more than putting characters on a screen. I had to think about
            scoring, combos, lives, timing, victory conditions, game-over
            states, and how the player knows when to interact.
          </p>

          <p>
            One challenge was making the rhythm system feel structured instead
            of making the player feel like they were randomly pressing
            buttons. This taught me how important visual feedback and timing
            are. A game needs to communicate what the player should do before
            expecting them to react.
          </p>

          <p>
            My biggest takeaway has been learning to build one feature at a
            time. Instead of trying to create the entire game at once, I can
            test a small feature, make sure it works, and then move to the next
            problem. That approach has made Unity much easier for me to
            understand.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="font-semibold text-purple-300 hover:text-purple-200"
          >
            ← Back to all posts
          </Link>

          <Link
            href="/posts/react-node-full-stack"
            className="rounded-full bg-purple-500 px-6 py-3 font-semibold transition hover:bg-purple-400"
          >
            Next Post →
          </Link>
        </div>
      </article>
    </main>
  );
}