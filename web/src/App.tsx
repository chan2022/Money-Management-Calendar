import { useState } from "react"
import Dashboard from "./pages/overview/Dashboard"
import Login from "./pages/authentication/Login"
import Signup from "./pages/authentication/Signup"
import "./App.css"

function App() {
  const [page, setPage] = useState<"login" | "signup" | "dashboard">("login")
  return (
    <div>
      <h1 className="app-title">MO&A</h1>

      {page === "login" && (
        <Login
          onGoToSignup={() => setPage("signup")}
          onLogin={() => setPage("dashboard")}
        />
      )}

      {page === "signup" && (
        <Signup onGoToLogin={() => setPage("login")} />
      )}

      {page === "dashboard" && <Dashboard />}
    </div>
  )
}

export default App