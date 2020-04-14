import React, { Component } from "react"
import { Link } from "react-router-dom"

class ShowProperties extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Featured Listings</h1>
        <div className="city-listings-row">
          <div className="new-york">
            <h2 className="city-name">
              <Link to="/cities/New York">New York</Link>
            </h2>
          </div>
          <div className="los-angeles">
            <h2 className="city-name">
              <Link to="/cities/Los Angeles">Los Angeles</Link>
            </h2>
          </div>
          <div className="chicago">
            <h2 className="city-name">
              <Link to="/cities/Chicago">Chicago</Link>
            </h2>
          </div>
          <div className="miami">
            <h2 className="city-name">
              <Link to="/cities/Miami">Miami</Link>
            </h2>
          </div>
        </div>
        <div className="city-listings-row">
          <div className="san-francisco">
            <h2 className="city-name">
              <Link to="/cities/San Francisco">San Francisco</Link>
            </h2>
          </div>
          <div className="houston">
            <h2 className="city-name">
              <Link to="/cities/Houston">Houston</Link>
            </h2>
          </div>
          <div className="seattle">
            <h2 className="city-name">
              <Link to="/cities/Seattle">Seattle</Link>
            </h2>
          </div>
          <div className="las-vegas">
            <h2 className="city-name">
              <Link to="/cities/Las Vegas">Las Vegas</Link>
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowProperties
