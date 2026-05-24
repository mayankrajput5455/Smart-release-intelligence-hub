import { useEffect, useState } from "react"

export default function ScoreCard() {

  const [readiness, setReadiness] = useState(null)

  useEffect(() => {

    fetch("${import.meta.env.VITE_API_URL}/api/release")
      .then((res) => res.json())
      .then((data) => {
        setReadiness(data.readiness)
      })

  }, [])

  if (!readiness) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        Loading readiness score...
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Release Readiness
      </h2>

      <div className="flex items-center gap-6">

        {/* Score Circle */}
        <div
          className={`w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold shadow-inner text-white
          ${
            readiness.status === "Green"
              ? "bg-green-500"
              : readiness.status === "Amber"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          {readiness.score}%
        </div>

        {/* Status */}
        <div>

          <p
            className={`text-2xl font-semibold
            ${
              readiness.status === "Green"
                ? "text-green-600"
                : readiness.status === "Amber"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {readiness.status} Status
          </p>

          <p className="text-gray-500 mt-2">
            {readiness.incompleteIssues} incomplete issues
          </p>

          <p className="text-gray-500">
            {readiness.openPRs} open pull requests
          </p>

        </div>

      </div>

    </div>
  )
}