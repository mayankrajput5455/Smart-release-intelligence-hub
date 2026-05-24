import { useEffect, useState } from "react"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts"

export default function AnalyticsCharts() {

  const [chartData, setChartData] = useState([])

  useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/api/jira`)
      .then((res) => res.json())
      .then((data) => {

        const issues = data.issues || []

        let done = 0
        let inProgress = 0
        let todo = 0

        issues.forEach((issue) => {

          const status = issue.fields?.status?.name

          if (status === "Done") {
            done++
          }

          else if (status === "In Progress") {
            inProgress++
          }

          else {
            todo++
          }

        })

        setChartData([
          { name: "Done", value: done },
          { name: "In Progress", value: inProgress },
          { name: "To Do", value: todo }
        ])

      })

  }, [])

  const COLORS = [
    "#22c55e",
    "#eab308",
    "#ef4444"
  ]

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      {/* Pie Chart */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-2xl font-bold mb-6">
          Issue Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              outerRadius={100}
              label
            >

              {
                chartData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))
              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-2xl font-bold mb-6">
          Jira Status Analytics
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#3b82f6"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}