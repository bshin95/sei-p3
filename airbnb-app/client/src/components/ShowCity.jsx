import React, { Component } from "react"
import { listCityWithProperties } from "../services/api-helper"

class ShowCity extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: [],
    }
  }

  async componentDidMount() {
    try {
      const { data } = await listCityWithProperties(
        this.props.match.params.name
      )
      console.log(data)
      this.setState({ cities: data.cityWithProperties })
    } catch (err) {
      console.log("error fetching cities", err)
    }
  }

  render() {
    const cities =
      this.state.cities &&
      this.state.cities.map((property) => (
        <div>
          <div className="address-zipcode">
            <div>
              <div>{property.address}</div>
              <div>{property.zipcode}</div>
              <button
                className="book-button"
                onClick={(event) =>
                  (window.location.href = "/booking-confirmation")
                }
              >
                Book here
              </button>
            </div>
          </div>
        </div>
      ))
    return <div className="property-listings">{cities}</div>
  }
}

export default ShowCity
