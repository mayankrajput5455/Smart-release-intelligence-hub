import {
  FaChartBar,
  FaGithub,
  FaRobot,
  FaCog,
  FaBars,
} from "react-icons/fa"

const user = JSON.parse(
  localStorage.getItem("user")
)

export default function Sidebar({
  collapsed,
  setCollapsed,
  setActivePage,
}) {

  return (
    <div
      className={`h-screen overflow-y-auto bg-[#0f172a] text-white fixed left-0 top-0 shadow-2xl transition-all duration-300 ${
        collapsed ? "w-[90px]" : "w-[260px]"
      }`}
    >

      <div className="flex flex-col justify-between h-full">

        <div>

          {/* Top */}
          <div className="p-5 border-b border-gray-700 flex items-center justify-between">

            {!collapsed && (
              <div>
                <h1 className="text-2xl font-bold">
                  Smart Hub
                </h1>

                <p className="text-gray-400 text-sm">
                  AI Release
                </p>
              </div>
            )}

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-xl hover:text-blue-400 transition"
            >
              <FaBars />
            </button>

          </div>

          {/* Menu */}
          <div className="p-4 space-y-3">

            {/* Dashboard */}
            <div
              onClick={() => setActivePage("dashboard")}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700 cursor-pointer transition"
            >
              <FaChartBar />

              {!collapsed && <span>Dashboard</span>}
            </div>

            {/* GitHub PR */}
            <div
              onClick={() => setActivePage("github")}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700 cursor-pointer transition"
            >
              <FaGithub />

              {!collapsed && <span>GitHub PRs</span>}
            </div>

            {/* AI Notes */}
            <div
              onClick={() => setActivePage("ai")}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700 cursor-pointer transition"
            >
              <FaRobot />

              {!collapsed && <span>AI Notes</span>}
            </div>

          </div>

        </div>

        {/* Bottom User */}
        <div className="p-5 border-t border-gray-700">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl">
              {
                user?.name ? user.name.charAt(0) : "U"
              }
            </div>

            {!collapsed && (
              <div>
                <h3>
                  {user?.name || "User"}
                </h3>

                <p className="text-sm text-gray-400">
                  Admin
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  )
}