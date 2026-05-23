import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 text-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6">

        <div>
          <h1 className="text-3xl font-bold">
            Smart Release Hub
          </h1>

          <p className="text-gray-400">
            AI Powered Release Intelligence
          </p>
        </div>

        <div className="flex gap-4">

          <Link
            to="/login"
            className="border border-gray-500 px-5 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold transition"
          >
            Sign Up
          </Link>

        </div>

      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <h1 className="text-6xl font-bold max-w-4xl leading-tight">
          Automate Software Releases with AI
        </h1>

        <p className="text-gray-300 text-xl mt-8 max-w-2xl">
          Connect Jira, GitHub, and AI to generate release notes,
          readiness scores, and deployment intelligence.
        </p>

        <div className="flex gap-5 mt-10">

          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-gray-500 px-8 py-4 rounded-xl text-lg hover:bg-gray-700 transition"
          >
            Login
          </Link>

        </div>

      </div>

    </div>
  )
}