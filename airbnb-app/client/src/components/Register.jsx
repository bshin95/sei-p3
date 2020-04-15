import React from "react"

const Register = (props) => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <hr />
      <div>
        <form className="register-form" onSubmit={props.handleRegister}>
          <div className="register-bar">
            <p>First Name:</p>
            <input
              name="first_name"
              type="text"
              value={props.formData.first_name}
              onChange={props.handleChange}
            />
          </div>
          <div className="register-bar">
            <p>Last Name:</p>
            <input
              name="last_name"
              type="text"
              value={props.formData.last_name}
              onChange={props.handleChange}
            />
          </div>
          <div className="register-bar">
            <p>Username:</p>
            <input
              name="username"
              type="text"
              value={props.formData.username}
              onChange={props.handleChange}
            />
          </div>
          <div className="register-bar">
            <p>Email:</p>
            <input
              name="email"
              type="text"
              value={props.formData.email}
              onChange={props.handleChange}
            />
          </div>
          <div className="register-bar">
            <p>Address:</p>
            <input
              name="address"
              type="text"
              value={props.formData.address}
              onChange={props.handleChange}
            />
          </div>
          <div className="register-bar">
            <p>City:</p>
            <input
              name="city"
              type="text"
              value={props.formData.city}
              onChange={props.handleChange}
            />
          </div>
          <div className="register-bar">
            <p>State:</p>
            <input
              name="state"
              type="text"
              value={props.formData.state}
              onChange={props.handleChange}
            />
          </div>
          <div className="register-bar">
            <p>Country:</p>
            <input
              name="country"
              type="text"
              value={props.formData.country}
              onChange={props.handleChange}
            />
          </div>
          <div className="register-bar">
            <p>Zipcode:</p>
            <input
              name="zipcode"
              type="text"
              value={props.formData.zipcode}
              onChange={props.handleChange}
            />
          </div>
          <div className="register-bar">
            <p>Password:</p>
            <input
              name="password"
              type="password"
              value={props.formData.password}
              onChange={props.handleChange}
            />
          </div>
          <button
            className="register-button"
            onClick={(event) => (window.location.href = "/")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
