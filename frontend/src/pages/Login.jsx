import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {

  e.preventDefault()

  try {

    const response = await fetch(

      "http://localhost:5000/api/auth/login",

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email,
          password
        })

      }

    )

    const data = await response.json()

    // LOGIN SUCCESS
    if (data.token) {

      localStorage.setItem(
        "token",
        data.token
      )

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      )

      localStorage.setItem(
        "isLoggedIn",
        "true"
      )

      navigate("/dashboard")

    }

    // LOGIN FAILED
    else {

      alert(data.message)

    }

  } catch (error) {

    console.log(error)

    alert("Server Error")

  }

}

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        {/* Title */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-3">
            Login to continue managing releases
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* Email */}
          <div>

            <label className="block mb-2 text-gray-700 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-blue-500"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 text-gray-700 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-blue-500"
            />

          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">

            <button
              type="button"
              className="text-blue-500 hover:text-blue-600 text-sm"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl font-semibold text-lg transition"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-8">

          Don’t have an account?

          <Link
            to="/signup"
            className="text-blue-500 ml-2 font-medium"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  )
}