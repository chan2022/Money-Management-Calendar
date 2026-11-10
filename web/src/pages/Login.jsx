import "./Login.css"

function Login() {
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

            <div className="input-group">
                <input
                type="password"
                placeholder="Password"
                />
            </div>

            <button type="submit">Login</button>
            </form>

            <p className="signup-text">
                Don’t have an account? <a href="#">Account Setup</a>
            </p>
        </div>
    </div>
  )
}

export default Login