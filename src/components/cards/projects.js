import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Grid from "@material-ui/core/Grid";
import WorkCard from "./work-card";

const Projects = () => {
    const [spacing] = React.useState(6);

    const data = useStaticQuery(graphql`
        query {
             allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {type: {eq: "project"}}}) {
                edges {
                    node {
                    id
                        frontmatter {
                          company
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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {data.allMarkdownRemark.edges.map(post => (<ProjectCard post={post}/>))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Projects;
