import { useEffect, useState } from "react"

export default function ReleaseTabs() {

  const [aiNotes, setAiNotes] = useState(null)

  const [activeTab, setActiveTab] =
    useState("engineering")

  useEffect(() => {

    fetch("http://localhost:5000/api/release")
      .then((res) => res.json())
      .then((data) => {

        console.log(data)

        setAiNotes(data.aiNotes)

      })

  }, [])

  if (!aiNotes) {

    return (
      <div className="bg-gray-100 rounded-xl p-5 whitespace-pre-line leading-8">

      {
        activeTab === "engineering"
          ? aiNotes?.engineering || "No engineering notes"

          : activeTab === "qa"
          ? aiNotes?.qa || "No QA notes"

          : aiNotes?.executive || "No executive notes"
      }

      </div>
    )

}

  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        AI Generated Release Notes
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">

        <button
          onClick={() =>
            setActiveTab("engineering")
          }
          className={`px-5 py-2 rounded-lg font-medium transition
          ${
            activeTab === "engineering"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Engineering
        </button>

        <button
          onClick={() =>
            setActiveTab("qa")
          }
          className={`px-5 py-2 rounded-lg font-medium transition
          ${
            activeTab === "qa"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          QA
        </button>

        <button
          onClick={() =>
            setActiveTab("executive")
          }
          className={`px-5 py-2 rounded-lg font-medium transition
          ${
            activeTab === "executive"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Executive
        </button>

      </div>

      {/* Content */}
      <div className="bg-gray-100 rounded-xl p-5 whitespace-pre-line leading-8">

        {
          activeTab === "engineering"
            ? aiNotes.engineering

            : activeTab === "qa"
            ? aiNotes.qa

            : aiNotes.executive
        }

      </div>

    </div>

  )
}