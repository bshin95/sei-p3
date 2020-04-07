import React, { Component } from "react"
import { Route, Link } from "react-router-dom"
import { withRouter } from "react-router"
import Login from "./components/Login"
import Register from "./components/Register"
import "./App.css"

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/api-helper"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,

      authFormData: {
        email: "",
        password: "",
      },
    }
  }

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  componentDidMount = () => {
    this.handleVerify()
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData)
    this.setState({ currentUser })
  }

  handleRegister = async (e) => {
    e.preventDefault()
    const currentUser = await registerUser(this.state.authFormData)
    this.setState({ currentUser })
  }

  handleVerify = async () => {
    const currentUser = await verifyUser()
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  handleLogout = () => {
    localStorage.removeItem("jwt")
    this.setState({
      currentUser: null,
    })
    removeToken()
  }

  authHandleChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value,
      },
    }))
  }

  render() {
    return (
      <div>
        <header>
          <h1>Airbnb App</h1>
          {this.state.currentUser ? (
            <div>
              {/* This is a greeting to the user if there user info has been set in state.
              We use the guard operator to check '&&' */}
              <h3>
                Hi {this.state.currentUser && this.state.currentUser.email}
                <button onClick={this.handleLogout}>logout</button>
              </h3>
            </div>
          ) : (
            <button onClick={this.handleLoginButton}>Login/register</button>
          )}
        </header>
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData}
            />
          )}
        />
        <Route
          exact
          path="/register"
          render={(props) => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData}
            />
          )}
        />
      </div>
    )
  }
}

export default withRouter(App)
