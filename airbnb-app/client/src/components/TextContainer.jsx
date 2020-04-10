import React, { Component } from "react"
import { Link } from "react-router-dom"

class container extends Component {
  get renderCheckMark() {
    if (this.props.checkmark) {
      return (
        <img
          className="checkmark"
          src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-circle-outline.png"
          alt="checkmark"
        ></img>
      )
    }
    return null
  }

  get renderLink() {
    if (this.props.linkTo && this.props.linkText) {
      return (
        <Link to={this.props.linkTo} className="link-start">
          {this.props.linkText}
        </Link>
      )
    }
  }

  render() {
    return (
      <div className="host-steps">
        {this.renderCheckMark}
        <h3>{this.props.header}</h3>
        <p>{this.props.body}</p>
        {this.renderLink}
      </div>
    )
  }
}

export default container
