import { Navigate } from "react-router-dom"

export default function ProtectedRoute({

  children

}) {

  const isLoggedIn =
    localStorage.getItem("token")

  // NOT LOGGED IN
  if (!isLoggedIn) {

    return <Navigate to="/login" />

  }

  // LOGGED IN
  return children
}