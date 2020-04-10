import React, { Component } from "react"
import { Route } from "react-router-dom"
import { withRouter } from "react-router"
import Login from "./components/Login"
import Register from "./components/Register"
import ShowProperties from "./components/ShowProperties"
import ListProperties from "./components/ListProperty"
import StartHosting from "./components/StartHosting"
import HostingConfirmation from "./components/HostingConfirmation"
import UserListings from "./components/UserListings"
import HomePage from "./components/HomePage"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

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
      property: [],

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
        <Header
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              {...props}
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
              {...props}
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData}
            />
          )}
        />
        <Route exact path="/properties" component={ShowProperties} />
        <Route exact path="/properties/host" component={ListProperties} />
        <Route exact path="/properties/host/start" component={StartHosting} />
        <Route
          exact
          path="/hosting-confirmation"
          component={HostingConfirmation}
        />
        <Route exact path="/users/:id" component={UserListings} />
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
