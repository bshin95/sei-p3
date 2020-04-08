import React, { Component } from "react"
import { Route, Link } from "react-router-dom"

class HostingConfirmation extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Thanks for Hosting!</h1>
        <Link className="return-home-confirmation" to="/">
          Return back to home
        </Link>
      </div>
    )
  }
}

export default HostingConfirmation
