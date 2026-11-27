import { useState } from "react"
import Dashboard from "./pages/overview/Dashboard"
import Login from "./pages/authentication/Login"
import Signup from "./pages/authentication/Signup"
import ProfileSetup from "./pages/profile-setup/ProfileSetup"
import "./App.css"

function App() {
  const [page, setPage] = useState<"login" | "signup" | "profile-setup" | "dashboard">("login")
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
        <Signup
          onGoToLogin={() => setPage("login")}
          onSignUp={() => setPage("profile-setup")}
        />
      )}

      {page === "profile-setup" && (
        <ProfileSetup
          onComplete={() => setPage("dashboard")}
          onBackToSignup={() => setPage("signup")}
        />
      )}

      {page === "dashboard" && <Dashboard />}
    </div>
  )
}

export default App