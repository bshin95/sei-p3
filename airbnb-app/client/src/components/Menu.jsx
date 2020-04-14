import React, { Component } from "react"

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="menu-options">
          <h4>About</h4>
          <p>Diversity & Belonging</p>
          <p>Accessibility</p>
          <p>Trust & Safety</p>
          <p>Airbnb Citizen</p>
          <p>Newsroom</p>
        </div>
        <div className="menu-options">
          <h4>Community</h4>
          <p>Airbnb Magazine</p>
          <p>Airbnb for Work</p>
          <p>Invite friends</p>
          <p>Gift cards</p>
          <p>Careers</p>
        </div>
        <div className="menu-options">
          <h4>Host</h4>
          <p>Host your home</p>
          <p>Host an experience</p>
          <p>Responsible hosting</p>
          <p>Open homes</p>
          <p>Resource Center</p>
        </div>
        <div className="menu-options">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Neighborhood Support</p>
        </div>
      </div>
    )
  }
}

export default Menu
