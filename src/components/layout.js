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
import Grid from "@material-ui/core/Grid";
import {OutboundLink} from "gatsby-plugin-google-analytics";

const useStyles = makeStyles({
    layout: {
        margin: `0 auto`,
        overflowX: 'hidden',
        overflowY: 'hidden',
    },
    footer: {
        marginTop: '6vw',
        width: '100vw',
        paddingTop: `2rem`,
        background: '#24292D',
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
            <Grid
                container
                justify="center"
                alignContent="center"
                spacing={2}
            >
                <Grid item>
                    <OutboundLink href="https://www.goodreads.com/user/show/41209622-josh-kearney"><img src="../../book.svg"/></OutboundLink>
                </Grid>
                <Grid item>
                    <OutboundLink href="https://www.linkedin.com/in/joshua-kearney/"><img src="../../linkedin.svg"/></OutboundLink>
                </Grid>
                <Grid item>
                    <OutboundLink href="https://github.com/Jpk518"><img src="../../github.svg"/></OutboundLink>
                </Grid>
            </Grid>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
