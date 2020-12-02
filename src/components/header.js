import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(20, 35, 75)`,
      marginBottom: `6rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `3rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Hey, I'm Josh
        </Link>
          {/*<Image />*/}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
