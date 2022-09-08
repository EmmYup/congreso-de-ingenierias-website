import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <header style={{}}>
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
