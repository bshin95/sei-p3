import React, { Component } from "react"
import TextContainer from "./TextContainer"

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <img
          className="home-page-image"
          src="https://a0.muscache.com/pictures/5fb428c8-6829-43ee-ba1b-3c557791c73e.jpg"
          alt="homepage picture"
        ></img>
        <h1 className="home-page-header">Airbnb is for everybody</h1>
        <hr />
        <h1>About us</h1>
        <div className="steps-container">
          <TextContainer
            header="What is Airbnb?"
            body="Airbnb is one of the world’s largest marketplaces for unique, authentic places to stay and things to do. Airbnb promotes people-to-people connection, community and trust around the world."
          />
          <TextContainer
            header="What do we offer?"
            body="Airbnb offers users to host or book places around the world. Whether it is a long-term stay or short-term vacation, Airbnb has you covered."
          />
          <TextContainer
            header="Our commitment"
            body="Airbnb has helped millions of hospitality entrepreneurs monetize their spaces and their passions while keeping the financial benefits of tourism in their own communities."
          />
        </div>
        <div className="split-container">
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80"
              alt=""
            ></img>
          </div>
          <div className="hero-text">
            <div>Hello world</div>
          </div>
        </div>
      </div>
    )
  }
}

// src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80"

export default HomePage
