import {
  Bell,
  Search
} from "lucide-react"

import { useNavigate } from "react-router-dom"

export default function Navbar() {

  const navigate = useNavigate()

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  const handleLogout = () => {

    localStorage.removeItem("token")

    localStorage.removeItem("user")

    localStorage.removeItem("isLoggedIn")

    navigate("/home")

  }

  return (

    <div className="bg-white shadow-md rounded-2xl p-4 flex items-center justify-between">

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl w-[400px]">

        <Search
          size={20}
          className="text-gray-500"
        />

        <input
          type="text"
          placeholder="Search releases..."
          className="bg-transparent outline-none ml-3 w-full"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* User */}
        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">

            {
              user?.name
                ? user.name.charAt(0)
                : "M"
            }

          </div>

          <div>

            <h3 className="font-semibold text-gray-800">

              {
                user?.name || "Aaisha Singh"
              }

            </h3>

            <p className="text-sm text-gray-500">
              Admin
            </p>

          </div>

        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition font-medium"
        >
          Logout
        </button>

      </div>

    </div>

  )
}