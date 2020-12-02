import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typewriter from 'typewriter-effect';

const Header = () => (
    <header
        style={{
            background: `rgb(20, 35, 75)`,
            marginBottom: `6rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 1000,
                padding: `3rem 1rem`,
            }}
        >
            <h1 style={{
                margin: 0,
                fontSize: 40,
            }}>
                Hey, I'm Josh
            </h1>
            <Typewriter
                options={{
                    strings: ['Junior Engineer.', 'Software Developer.', 'Designer & Creator.'],
                    autoStart: true,
                    loop: true,
                    pauseFor: 3000,
                }}
            />
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
