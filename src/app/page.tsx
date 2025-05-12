import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Matchmaking SaaS for Competitive Games
        </h1>
        <p className="text-gray-700 text-lg">
          Plug-and-play ELO ranking + matchmaking API. Let us handle fair
          competitive matching and leaderboard logic, so you can focus on
          building your game.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded hover:bg-gray-400 transition"
          >
            Login
          </Link>
          <Link
            href="/docs"
            className="underline text-blue-600 hover:text-blue-800"
          >
            API Docs
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Built with TypeScript, PostgreSQL, Redis, Docker, and Next.js
        </p>
      </div>
    </main>
  );
}
