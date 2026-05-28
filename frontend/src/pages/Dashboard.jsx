import { useState } from "react"

import Sidebar from "../components/Sidebar"
import TopNavbar from "../components/Navbar"
import ScoreCard from "../components/ScoreCard"
import FailedGates from "../components/FailedGates"
import ReleaseTabs from "../components/ReleaseTab"
import JiraTickets from "../components/JiraTickets"
import AnalyticsCharts from "../components/AnalyticsCharts"

export default function Dashboard() {

  const [collapsed, setCollapsed] = useState(false)

  const [activePage, setActivePage] = useState("dashboard")

  return (
    <div className="bg-gray-100 min-h-screen">

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setActivePage={setActivePage}
      />

      <div
        className={`h-screen overflow-y-auto p-8 transition-all duration-300 ${
          collapsed ? "ml-[90px]" : "ml-[260px]"
        }`}
      >

        <TopNavbar />

        {/* DASHBOARD */}
        {activePage === "dashboard" && (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

            <ScoreCard />

            <FailedGates />

            <div className="md:col-span-2">
              <ReleaseTabs />
            </div>

            <div className="md:col-span-2">
              <JiraTickets />
            </div>

            <div className="md:col-span-2">
              <AnalyticsCharts />
            </div>

          </div>

        )}

        {/* GITHUB PR PAGE */}
        {activePage === "github" && (

          <div className="mt-6">

            <h1 className="text-3xl font-bold mb-6">
              GitHub Pull Requests
            </h1>

            <ScoreCard />

          </div>

        )}

        {/* AI NOTES PAGE */}
        {activePage === "ai" && (

          <div className="mt-6">

            <h1 className="text-3xl font-bold mb-6">
              AI Generated Notes
            </h1>

            <ReleaseTabs />

          </div>

        )}

      </div>

    </div>
  )
}