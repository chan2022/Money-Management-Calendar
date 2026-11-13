import "./Signup.css"

function Signup({ onGoToLogin }) {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 style={{ textAlign: "center" }}>SIGN UP</h2>

        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Already have an account?{" "}
          <a href="#" onClick={(e) => {
            e.preventDefault()
            onGoToLogin()
          }}>
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup
