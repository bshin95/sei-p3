import React, { Component } from "react"
import { Link } from "react-router-dom"
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
        <h1 className="h1-text">About us</h1>
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
        <hr />
        <div className="image-text-container">
          <div className="left-half">
            <img
              className="left-image"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="living-space"
            />
          </div>
          <div className="right-half">
            <h1 className="h1-text">What is hosting?</h1>
            <p className="right-half-text">
              Airbnb connects people with places to stay and things to do around
              the world. The community is powered by hosts, who provide their
              guests with the unique opportunity to travel like a local.
              <br /> <br />
              If you have an extra room, entire home, or expertise, you can earn
              money by sharing it with anyone in the world. You can host your
              home, activity, or do both. When you host is up to you.
            </p>
          </div>
        </div>

        <hr />
        <h1 className="h1-text">Trust & Safety</h1>
        <p>Airbnb is designed with safety—both online and off—in mind</p>
        <div className="steps-container">
          <TextContainer
            checkmark
            header="Risk scoring"
            body="Every Airbnb reservation is scored for risk before it’s confirmed. We use predictive analytics and machine learning to instantly evaluate hundreds of signals that help us flag and investigate suspicious activity before it happens."
          />
          <TextContainer
            checkmark
            header="Watchlist & background checks"
            body="While no screening system is perfect, globally we run hosts and guests against regulatory, terrorist, and sanctions watchlists. For hosts and guests in the United States, we also conduct background checks."
          />
          <TextContainer
            checkmark
            header="Preparedness"
            body="We run safety workshops with hosts and leading local experts and encourage hosts to provide guests with important local information. We also give any host who wants one a free smoke and carbon monoxide detector for their home."
          />
        </div>
        <div className="steps-container">
          <TextContainer
            checkmark
            header="Secure payments"
            body="Our secure platform ensures your money gets to the host—that’s why we ask you to always pay through Airbnb and never wire money or pay someone directly."
          />
          <TextContainer
            checkmark
            header="Account protection"
            body="We take a number of measures to safeguard your Airbnb account, like requiring multi-factor authentication when a login is attempted from a new phone or computer and sending you account alerts when changes are made."
          />
          <TextContainer
            checkmark
            header="Scam prevention"
            body="Always pay and communicate directly through the Airbnb website or app. As long as you stay on Airbnb throughout the entire process—from communication, to booking, to payment—you’re protected by our multi-layer defense strategy."
          />
        </div>
        <hr />
        <div className="image-text-container">
          <div className="right-half">
            <h1>Every home on Airbnb is unique</h1>
            <p className="right-half-text">
              Get exactly what you’re looking for by taking advantage of our
              many search filters, like price, home type, and amenities. Found a
              listing you like? Be sure to read the host’s profile and listing
              or experience description thoroughly—paying special attention to
              the amenities, house rules or trip requirements, and the
              cancellation policy.
            </p>
          </div>
          <div className="left-half">
            <img
              className="left-image"
              src="https://images.unsplash.com/photo-1551215717-8bc8cfe833ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="living-space"
            />
          </div>
        </div>
        <hr />
        <h1 className="h1-text">Start booking or hosting today</h1>
        <div className="steps-container">
          <div className="book-host-container">
            <div>
              <h3>Search listings</h3>
              <p>
                Search through listings from a number of cities around the
                world. Whether you are staying for a night or a month, we has
                you covered with our endless options from homes, apartments,
                condos, studios and whatever else you are searching for.{" "}
                <Link className="search-link" to="/properties">
                  Start searching for places
                </Link>
              </p>
            </div>
          </div>
          <div className="book-host-container">
            <div>
              <h3>Hosting your place</h3>
              <p>
                Have an empty home that's sitting around? Start hosting today
                and begin earning by listing your property. Don't let your
                vacant property go to waste. Begin your journey on Airbnb with
                us.{" "}
                <Link className="search-link" to="/properties/host">
                  Start hosting your place
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80"

export default HomePage
