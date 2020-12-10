import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/work";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        background: 'white',
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home"/>
            <Work/>
            {/*<Link to="/about/">About</Link> <br />*/}
            {/*<Link to="/blog/">Blog</Link> <br />*/}
        </Layout>
    )
}

export default IndexPage
