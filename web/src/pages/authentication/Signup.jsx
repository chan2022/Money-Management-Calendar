import "./Signup.css"

function Signup({ onGoToLogin, onSignUp }) {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 style={{ textAlign: "center", marginTop: "-30px", marginBottom: "10px" }}>CREATE AN ACCOUNT</h2>

        <p style={{ textAlign: "center", marginTop: "0px", marginBottom: "30px"}}>
          Already have an account?{" "}
          <a href="#" onClick={(e) => {
            e.preventDefault()
            onGoToLogin()
          }}>
            Login
          </a>
        </p>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            onSignUp()
          }}
        >
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Username"
                />
            </div>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Password"
                />
            </div>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Confirm Password"
                />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>

            <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
