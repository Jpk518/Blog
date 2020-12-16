import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/cards/blog";
import Work from "../components/cards/work";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
    divider: {
        padding: theme.spacing(2),
    },
}));

const IndexPage = () => {
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="Home"/>
            {/*<Blog/>*/}
            {/*<div className={classes.divider}/>*/}
=            <Work/>
            {/*<Link to="/about/">About</Link> <br />*/}
            {/*<Link to="/blog/">Blog</Link> <br />*/}
        </Layout>
    )
}

export default IndexPage
