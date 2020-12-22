import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Grid from "@material-ui/core/Grid";
import WorkCard from "./work-card";
import cardStyles from "./card-style";

const Work = () => {
    const [spacing] = React.useState(6);
    const classes = cardStyles();

    const data = useStaticQuery(graphql`
        query {
             allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {type: {eq: "employment"}}}) {
                edges {
                    node {
                    id
                        frontmatter {
                          company
                          type
                          typeHeader
                          title
                          dates
                          location
                          image
                        }
                    html
                    }
                }
            }
        }
    `)

    return (
        <Grid id="work" container spacing={2} style={{padding: '3rem'}}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item className={classes.sectionTitle}>
                        <Grid container direction="column" alignItems="center">
                            Work
                            <img style={{height: '50px'}} src="../underline.png" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={spacing}>
                    {data.allMarkdownRemark.edges.map(post => (<WorkCard post={post}/>))}
                </Grid>
            </Grid>
        </Grid>
    );
};


export default Work;
