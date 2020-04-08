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
        <div className="city-listings-row-one">
          <div>
            <h2 className="new-york">
              <Link>New York</Link>
            </h2>
          </div>
          <div>
            <h2 className="los-angeles">
              <Link>Los Angeles</Link>
            </h2>
          </div>
          <div>
            <h2 className="chicago">
              <Link>Chicago</Link>
            </h2>
          </div>
          <div>
            <h2 className="miami">
              <Link>Miami</Link>
            </h2>
          </div>
        </div>
        <div className="city-listings-row-two">
          <div>
            <h2 className="paris">
              <Link>Paris</Link>
            </h2>
          </div>
          <div>
            <h2 className="london">
              <Link>London</Link>
            </h2>
          </div>
          <div>
            <h2 className="tokyo">
              <Link>Tokyo</Link>
            </h2>
          </div>
          <div>
            <h2 className="seoul">
              <Link>Seoul</Link>
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowProperties
