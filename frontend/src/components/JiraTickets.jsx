import { useEffect, useState } from "react"

export default function JiraTickets() {

  const [issues, setIssues] = useState([])

  useEffect(() => {

    fetch("http://localhost:5000/api/jira")
      .then((res) => res.json())
      .then((data) => {

        setIssues(data.issues || [])

      })

  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">

      <h2 className="text-2xl font-bold mb-6">
        Jira Issues
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">Issue Key</th>

              <th className="p-4">Summary</th>

              <th className="p-4">Status</th>

              <th className="p-4">Assignee</th>

            </tr>

          </thead>

          <tbody>

            {issues.map((issue) => (

              <tr
                key={issue.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4 font-semibold text-blue-600">
                  {issue.key}
                </td>

                <td className="p-4">
                  {issue.fields?.summary || "No Summary"}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      issue.fields?.status?.name === "Done"
                        ? "bg-green-100 text-green-700"
                        : issue.fields?.status?.name === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {issue.fields?.status?.name || "Unknown"}
                  </span>

                </td>

                <td className="p-4">
                  {issue.fields?.assignee?.displayName || "Unassigned"}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}