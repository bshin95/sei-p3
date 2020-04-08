import React from "react"
import { Link } from "react-router-dom"

const Login = (props) => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.handleLogin()
        }}
      >
        <p>Username:</p>
        <input
          name="username"
          type="text"
          value={props.formData.username}
          onChange={props.handleChange}
        />
        <p>Password:</p>
        <input
          name="password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange}
        />
        <hr />
        <div className="login-page-bot-buttons">
          <button className="login-page-button">Login</button>
          <Link className="login-register-button" to="/register">Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
