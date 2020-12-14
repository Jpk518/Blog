/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    layout: {
        margin: `0 auto`,
    },
    footer: {
        marginTop: '6vw',
        width: '100vw',
        padding: `3rem`,
        background: `rgb(20, 35, 75)`,
    }
});

const Layout = ({ children }) => {
    const classes = useStyles();

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={classes.layout}>
        <main>{children}</main>
        <footer className={classes.footer}>
          Josh Kearney, {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
