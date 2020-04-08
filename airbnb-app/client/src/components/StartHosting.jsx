import React, { Component } from "react"
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
        <div>
          <h1>How to start hosting</h1>
        </div>
        <div>
          <h2>Start hosting</h2>
          <form onSubmit={this.addProperty}>
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
    )
  }
}

export default StartHosting

// class StartHosting extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       properties: [],
//     }

//     this.handleFormSubmit = this.handleFormSubmit.bind(this)
//   }

//   handleFormSubmit(address, zipcode) {
//     console.log(address, zipcode)
//   }

//   fetch("http://localhost:3000/properties/host/start") {

//   }

//   componentDidMount() {
//     fetch("/properties/host/start")
//       .then((response) => {
//         return response.json()
//       })
//       .then((data) => {
//         this.setState({ properties: data })
//       })
//   }

//   render() {
//     let formFields = {}
//     return (
//       <div>
//         <div>
//           <h1>How to start hosting</h1>
//         </div>
//         <div>
//           <h2>Start hosting</h2>
//           <form
//             onSubmit={(e) => {
//               props.handleFormSubmit(
//                 formFields.address.value,
//                 formFields.zipcode.value
//               )
//               e.target.reset()
//             }}
//           >
//             <input
//               ref={(input) => (formFields.address = input)}
//               placeholder="Enter address"
//             />
//             <input
//               ref={(input) => (formFields.zipcode = input)}
//               placeholder="Enter a zipcode"
//             />
//             <button>Submit</button>
//           </form>
//           <button>Submit your housing</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default StartHosting
