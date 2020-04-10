import React from "react"

const Register = (props) => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <hr />
      <form onSubmit={props.handleRegister}>
        <p>First Name:</p>
        <input
          name="first_name"
          type="text"
          value={props.formData.first_name}
          onChange={props.handleChange}
        />
        <p>Last Name:</p>
        <input
          name="last_name"
          type="text"
          value={props.formData.last_name}
          onChange={props.handleChange}
        />
        <p>Username:</p>
        <input
          name="username"
          type="text"
          value={props.formData.username}
          onChange={props.handleChange}
        />
        <p>Email:</p>
        <input
          name="email"
          type="text"
          value={props.formData.email}
          onChange={props.handleChange}
        />
        <p>Address:</p>
        <input
          name="address"
          type="text"
          value={props.formData.address}
          onChange={props.handleChange}
        />
        <p>City:</p>
        <input
          name="city"
          type="text"
          value={props.formData.city}
          onChange={props.handleChange}
        />
        <p>State:</p>
        <input
          name="state"
          type="text"
          value={props.formData.state}
          onChange={props.handleChange}
        />
        <p>Country:</p>
        <input
          name="country"
          type="text"
          value={props.formData.country}
          onChange={props.handleChange}
        />
        <p>Zipcode:</p>
        <input
          name="zipcode"
          type="text"
          value={props.formData.zipcode}
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
        <button className="register-button">Register</button>
      </form>
    </div>
  )
}

export default Register
