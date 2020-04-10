import React, { Component } from "react"
import Modal from "react-modal"
import {
  destroyProperty,
  listCities,
  getUser,
  updateProperty,
} from "../services/api-helper"

// React modal code taken from:
// https://github.com/reactjs/react-modal
// https://codepen.io/claydiffrient/pen/KNxgav

class UserListings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: {},
      showModal: false,
      propertyToEdit: {},
    }
  }

  async componentDidMount() {
    try {
      const user = await getUser()
      const cities = await listCities()
      this.setState({ currentUser: user.data, cities: cities.data })
    } catch (err) {
      console.log("Error fetching user data", err)
    }
  }

  deleteProperty = async (id) => {
    try {
      const { currentUser } = this.state
      const { data } = await destroyProperty(id)
      const propertiesCopy = [...currentUser.properties].filter(
        (property) => property.id !== id
      )
      currentUser.properties = propertiesCopy
      this.setState({ currentUser })
    } catch (err) {
      console.log("Error deleting your property", err)
    }
  }

  toggleModal = () =>
    this.setState((prevState) => ({ showModal: !prevState.showModal }))

  handleInputChange = (e) => {
    const { propertyToEdit } = this.state
    this.setState({
      propertyToEdit: {
        ...propertyToEdit,
        [e.target.id]: e.target.value,
      },
    })
  }

  updateProperty = async (e) => {
    e.preventDefault()
    const { propertyToEdit, currentUser } = this.state
    try {
      const { data } = await updateProperty(propertyToEdit)
      const propertiesCopy = [...currentUser.properties]
      const propertyIndex = propertiesCopy.findIndex(
        (property) => property.id === propertyToEdit.id
      )
      propertiesCopy.splice(propertyIndex, 1, data)
      currentUser.properties = propertiesCopy
      this.setState({ currentUser }, this.toggleModal)
    } catch (err) {
      console.log("Error updating property", err)
    }
  }

  render() {
    const {
      currentUser: {
        id,
        first_name,
        last_name,
        username,
        email,
        address,
        city,
        state,
        country,
        zipcode,
        properties,
      },
      cities,
      showModal,
      propertyToEdit,
    } = this.state

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    }

    return (
      <div className="container">
        <Modal
          isOpen={showModal}
          onRequestClose={this.toggleModal}
          style={customStyles}
        >
          <h2>Edit Property</h2>
          <button onClick={this.toggleModal}>Close</button>
          <form onSubmit={this.updateProperty}>
            Address:{" "}
            <div>
              <input
                id="address"
                value={propertyToEdit.address}
                onChange={this.handleInputChange}
              />
            </div>
            City:
            <div>
              <select
                id="address"
                value={propertyToEdit.city}
                onChange={this.handleInputChange}
              >
                {cities &&
                  cities.map((city, i) => (
                    <option key={i} value={city.id}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
            Zip Code:
            <div>
              <input
                id="zipcode"
                value={propertyToEdit.zipcode}
                onChange={this.handleInputChange}
              />
            </div>
            <button btn btn-success>
              Submit
            </button>
          </form>
        </Modal>
        {id && (
          <div>
            <h1>Your Personal Information</h1>
            <div>
              <p>
                Name: {first_name} {last_name}
              </p>
              <p>Username: {username}</p>
              <p>Email: {email}</p>
              <p>Address: {address}</p>
              <p>Zip: {zipcode}</p>
              <p>City: {city}</p>
              <p>State: {state}</p>
              <p>Country: {country}</p>
            </div>

            <div>
              <h1>Your Listings</h1>

              <div className="row col-sm-12">
                {properties.map((property, i) => (
                  <div
                    key={i}
                    className="card col-sm-4"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">
                        {cities.find((c) => c.id === property.city_id).name}
                      </h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Zip Code: {property.zipcode}
                      </h6>
                      <p className="card-text">Address: {property.address}</p>
                      <button
                        onClick={() => {
                          this.setState(
                            { propertyToEdit: property },
                            this.toggleModal
                          )
                        }}
                        className="btn ml-3 btn-primary"
                      >
                        Edit Property
                      </button>
                      <button
                        onClick={() => this.deleteProperty(property.id)}
                        className="btn mr-3 btn-danger"
                      >
                        Delete Property
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default UserListings
