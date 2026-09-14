import Link from "next/link";

export default function BuildingCrudApiPost() {
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
          Building My First CRUD API
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-400">
          What I learned while building an API with Node.js, Express, MongoDB,
          and Mongoose.
        </p>

        <img
          src="/memory-lane/images/crud-api.png"
          alt="CRUD API project built with Node.js, Express, MongoDB, and Mongoose"
          className="mt-12 w-full rounded-3xl border border-white/10 shadow-xl"
        />

        <div className="mt-12 space-y-7 text-lg leading-8 text-slate-300">
          <p>
            Recently, I worked on building a CRUD API using Node.js, Express,
            MongoDB, and Mongoose. This project helped me better understand how
            the different parts of a backend application work together.
          </p>

          <p>
            An API, or Application Programming Interface, allows applications
            to exchange information. Express helped me create the server and
            handle requests, while MongoDB stored the application&apos;s data.
            Mongoose made it easier to connect my Node.js application to the
            database and define how the data should be structured.
          </p>

          <p>
            I created routes for the four main CRUD operations: Create, Read,
            Update, and Delete. POST requests allowed me to add new data, GET
            requests retrieved information, PUT and PATCH requests updated
            existing information, and DELETE requests removed records.
          </p>

          <p>
            One of the most important parts of this project was testing the API.
            Testing my routes helped me understand HTTP requests, status codes,
            JSON responses, and how information moves between the server and
            database.
          </p>

          <p>
            Building this API gave me a stronger understanding of backend
            development. It also helped me become more comfortable
            troubleshooting routes, database connections, and server
            responses. I can now better understand how an API becomes the
            connection between a frontend application and its data.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <Link
            href="/posts/nextjs-github-pages"
            className="font-semibold text-purple-300 hover:text-purple-200"
          >
            ← Previous Post
          </Link>

          <Link
            href="/"
            className="rounded-full bg-purple-500 px-6 py-3 font-semibold transition hover:bg-purple-400"
          >
            All Posts
          </Link>
        </div>
      </article>
    </main>
  );
}