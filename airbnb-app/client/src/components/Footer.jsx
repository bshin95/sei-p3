import React from "react"
import Menu from "./Menu"

export default function Header(props) {
  return (
    <div className="footer">
      <p className="footer-tags">
        © 2020 Airbnb, Inc. All rights reserved. All content belongs to Airbnb.
      </p>
      <p className="created-by">
        Created by <a href="https://github.com/bshin95"> Bryan Shin</a>
      </p>
    </div>
  )
}
