import Link from "next/link";

export default function SecuringApiPost() {
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
          Securing an API
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-400">
          What I learned about protecting APIs, user data, and sensitive
          information in a web application.
        </p>

        <img
          src="/memory-lane/images/api-security.png"
          alt="Illustration representing API security and protecting application data"
          className="mt-12 w-full rounded-3xl border border-white/10 shadow-xl"
        />

        <div className="mt-12 space-y-7 text-lg leading-8 text-slate-300">
          <p>
            After learning how to build CRUD APIs, I started looking more
            closely at another important part of backend development: security.
            An API can connect a frontend application to a database, but that
            also means developers need to think carefully about who can access
            the API and what information they are allowed to use.
          </p>

          <p>
            One important security practice is keeping sensitive information
            outside of the source code. Database connection strings, API keys,
            and other secrets should be stored in environment variables instead
            of being written directly into the application. Files such as .env
            should also be included in .gitignore so private credentials are
            not accidentally uploaded to GitHub.
          </p>

          <p>
            Authentication and authorization are also important when securing
            an API. Authentication verifies who a user is, while authorization
            determines what that user is allowed to do. For example, an
            application might allow a signed-in user to update their own
            profile without allowing them to change another user&apos;s
            information.
          </p>

          <p>
            APIs should also validate incoming data instead of automatically
            trusting information sent by a client. Validation can help prevent
            incorrect or unexpected data from reaching the database. Proper
            error handling is important as well because an API should return
            useful responses without exposing sensitive details about the
            server or database.
          </p>

          <p>
            Learning about API security has helped me see that building a
            working API is only part of backend development. Developers also
            have to consider how data is protected throughout the application.
            As I continue building full-stack projects, I want security to be
            something I consider from the beginning instead of something added
            only after an application is finished.
          </p>
        </div>

        <div className="mt-16 flex items-center justify-between gap-4 border-t border-white/10 pt-8">
  <Link
    href="/posts/securing-an-api"
    className="font-semibold text-purple-300 hover:text-purple-200"
  >
    ← Previous Post
  </Link>

  <Link
    href="/"
    className="rounded-full bg-purple-500 px-6 py-3 font-semibold text-white transition hover:bg-purple-400"
  >
    All Posts
  </Link>
</div>
      </article>
    </main>
  );
}