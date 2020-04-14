import React from "react"
import { Link } from "react-router-dom"

export default function Header(props) {
  return (
    <header>
      <div className="left-header">
        <img
          className="airbnb-logo"
          src="https://i.ya-webdesign.com/images/air-bnb-logo-png-5.png"
          alt="Airbnb-Logo"
        ></img>
        <h1 className="airbnb-header">
          <Link className="airbnb-home-link" to="/" onClick={props.resetForm}>
            airbnb
          </Link>
        </h1>
      </div>
      <div className="right-header">
        <div className="header-buttons">
          <div className="explore-buttons">
            {/* add the onclick function to these pages */}
            <button className="header-buttons">
              <Link to="/properties">Look for homes</Link>
            </button>
            <button className="header-buttons">
              <Link to="/properties/host">Host your home</Link>
            </button>
            <button className="header-buttons">
              <Link to="/users/current-user">Account</Link>
            </button>
            {props.currentUser ? (
              <>
                <Link>
                  {/* <p>Welcome, {props.currentUser.username}</p> */}
                  <button
                    className="header-buttons"
                    onClick={props.handleLogout}
                  >
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <button
                className="header-buttons"
                onClick={props.handleLoginButton}
              >
                Login/Register
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
