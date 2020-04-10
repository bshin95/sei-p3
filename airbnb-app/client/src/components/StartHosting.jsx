import React, { Component } from "react"
import TextContainer from "./TextContainer"
import { postProperty, listCities } from "../services/api-helper"

class StartHosting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: [],
      address: "",
      zipcode: "",
      city: "",
    }
  }

  async componentDidMount() {
    try {
      const { data } = await listCities()
      this.setState({ cities: data })
    } catch (err) {
      console.log("error fetching cities", err)
    }
  }

  addProperty = async (e) => {
    e.preventDefault()
    const { address, zipcode, city } = this.state
    try {
      await postProperty({ address, zipcode, city_id: city })
      this.props.history.push("/hosting-confirmation")
    } catch (err) {
      console.log("error adding property", err)
    }
  }

  handleInputChange = (e) => this.setState({ [e.target.id]: e.target.value })

  render() {
    const { cities, address, zipcode, city } = this.state
    return (
      <div>
        <img
          className="living-room"
          src="https://blindepot.com/wp-content/uploads/horizontal-blinds-living2-1795x933-1030x535.jpg"
          alt="living room"
        ></img>
        <div className="how-to-container">
          <h1>How to start hosting</h1>
          <div>
            <p>
              Listing your home is simple. Fill out the form and you're good to
              go. We will review the application and get back to you. All we
              require is your address, zipcode, and the city location.
            </p>
          </div>
        </div>
        <div>
          <hr />
          <h1>Payments made simple</h1>
          <div className="steps-container">
            <TextContainer
              header="Charge what you want"
              body="You always get to pick your price. Need help? We have tools to
              help you match demand in your area."
            />
            <TextContainer
              header="Pay low fees"
              body="You always get to pick your price. Need help? We have tools to
              help you match demand in your area."
            />
            <TextContainer
              header="Get paid quickly"
              body="Once a guest checks in, we can send your money by Paypal, direct
              deposit, or other available methods."
            />
          </div>
          <hr />
          <h1>List your home</h1>
          <div className="form-container">
            <form className="form-fillout" onSubmit={this.addProperty}>
              <input
                id="address"
                placeholder="Enter address"
                value={address}
                onChange={this.handleInputChange}
              />
              <input
                id="zipcode"
                placeholder="Enter a zipcode"
                value={zipcode}
                onChange={this.handleInputChange}
              />
              <select id="city" onChange={this.handleInputChange} value={city}>
                <option value="">Select a City</option>
                {cities.map((c, i) => (
                  <option key={i} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default StartHosting
