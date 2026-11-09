import "./Login.css"

function Login() {
  return (
    <div className="login-container">

      <div className="card">

        <h2>Welcome Back</h2>
        <p>Please log in to your account.</p>

        <form>
          <div className="input-group">
            <label>Email / ID</label>
            <input
              type="text"
              placeholder="Enter your email or ID"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>

      </div>

    </div>
  )
}

export default Login