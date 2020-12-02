import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkCard from "../components/work-card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

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
    const [spacing, setSpacing] = React.useState(6);
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="Home"/>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {[0, 1, 2, 3, 4, 5, 6].map((value) => (
                        <Grid key={value} item>
                            <WorkCard/>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
            {/*<Link to="/about/">About</Link> <br />*/}
            {/*<Link to="/blog/">Blog</Link> <br />*/}
        </Layout>
    )
}

export default IndexPage
