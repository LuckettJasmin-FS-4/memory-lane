import Link from "next/link";

export default function PasswordHashingPost() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-blue-400 hover:text-blue-300"
        >
          ← Back to Memory Lane
        </Link>

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Web Development
        </p>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Password Hashing: Protecting User Passwords
        </h1>

        <p className="mb-10 text-slate-400">
          Learning how password hashing helps developers build safer web
          applications.
        </p>

        <div className="mb-10">
  <img
    src="/memory-lane/images/password-hashing.png"
    alt="Password hashing process showing a password being converted into a secure hash"
    className="w-full rounded-2xl"
  />
  <p className="mt-3 text-center text-sm text-slate-400">
    Password hashing protects user credentials by storing a hash instead of
    the original password.
  </p>
</div>
        <div className="space-y-8 text-lg leading-8 text-slate-300">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              What Is Password Hashing?
            </h2>

            <p>
              Password hashing is a security technique that transforms a
              password into a different value before it is stored in a
              database. Instead of saving the user&apos;s actual password, an
              application stores the generated hash.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Why Plain-Text Passwords Are Dangerous
            </h2>

            <p>
              Storing passwords as plain text creates a major security risk.
              If someone gains access to the database, they could immediately
              read every every user&apos;s password. Hashing helps protect users because
              the original password is not stored directly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              How Password Hashing Works
            </h2>

            <p>
              When a user creates an account, the application sends the
              password through a password-hashing algorithm. The resulting
              hash is stored in the database. When the user logs in later,
              the application checks the password against the stored hash
              instead of comparing plain-text passwords.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Adding a Salt
            </h2>

            <p>
              Modern password-hashing systems also use a salt. A salt adds
              unique random data during the hashing process. This means two
              users who choose the same password can still have different
              stored hashes, making attacks against password databases more
              difficult.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Password Hashing in Node.js
            </h2>

            <p>
              In a Node.js application, developers can use password-hashing
              libraries such as bcrypt to hash passwords before saving user
              information. During authentication, bcrypt can compare the
              password entered by the user with the stored hash and determine
              whether they match.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              What I Learned
            </h2>

            <p>
              Learning about password hashing helped me understand that
              authentication is more than creating a login form. Developers
              also have a responsibility to protect the information users
              provide. Hashing passwords before storing them is an important
              part of building a more secure full-stack application.
            </p>
          </section>
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