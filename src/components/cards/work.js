import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Grid from "@material-ui/core/Grid";
import WorkCard from "./work-card";

const Work = () => {
    const [spacing] = React.useState(6);

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
                <Grid container justify="center" spacing={spacing}>
                    {data.allMarkdownRemark.edges.map(post => (<WorkCard post={post}/>))}
                </Grid>
            </Grid>
        </Grid>
    );
};


export default Work;
