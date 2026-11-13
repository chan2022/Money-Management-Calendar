import "./Login.css"

function Login({ onGoToSignup }) {
  return (
    <div className="login-container">
        <div className="login-card">
            <h2 style={{ textAlign: "center" }}>LOGIN</h2>

            <form>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Email"
                />
            </div>

            <div className="input-group password-group">
                <input
                    type="password"
                    placeholder="Password"
                />
                <a href="#" className="forgot-password">
                    Forgot Password ?
                </a>
            </div>

            <button type="submit">Login</button>
            </form>

            <p className="signup-text">
                Don’t have an account?{" "}
                <a href="#" onClick={(e) => {
                    e.preventDefault()
                    onGoToSignup()
                }}>
                    Account Setup
                </a>
            </p>
        </div>
    </div>
  )
}

export default Login