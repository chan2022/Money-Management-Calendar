import { useState } from "react"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import "./App.css"

function App() {
  const [page, setPage] = useState<"login" | "signup">("login")
  return (
    <div>
      <h1 className="app-title">MO&A</h1>

      {page === "login" ? (
        <Login onGoToSignup={() => setPage("signup")} />
      ) : (
        <Signup onGoToLogin={() => setPage("login")} />
      )}
    </div>
  )
}

export default App