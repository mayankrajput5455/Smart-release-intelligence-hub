import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Signup() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async (e) => {
    console.log("clicked")
    e.preventDefault()

    try {

      const response = await fetch(

        `${import.meta.env.VITE_API_URL}/api/auth/signup`,

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name,
            email,
            password
          })

        }

      )

      const data = await response.json()

      alert(data.message)

      // SUCCESS
      if (
        data.message ===
        "Signup successful"
      ) {

        navigate("/login")

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
            Create Account
          </h1>

          <p className="text-gray-500 mt-3">
            Start managing releases smarter
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSignup}
          className="space-y-5"
        >

          {/* Name */}
          <div>

            <label className="block mb-2 text-gray-700 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-blue-500"
            />

          </div>

          {/* Email */}
          <div>

            <label className="block mb-2 text-gray-700 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
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
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-blue-500"
            />

          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl font-semibold text-lg transition"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-8">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-500 ml-2 font-medium"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  )
}