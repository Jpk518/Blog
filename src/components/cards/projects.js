import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./project-card";
import cardStyles from "./card-style";

const Projects = () => {
    const [spacing] = React.useState(6);
    const classes = cardStyles();

    const data = useStaticQuery(graphql`
        query {
             allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {type: {eq: "project"}}}) {
                edges {
                    node {
                    id
                        frontmatter {
                          title
                          typeHeader
                          image
                        }
                    html
                    }
                }
            }
        }
    `)

    return (
        <Grid id="project" container spacing={2}  style={{paddingBottom: '3rem'}}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item className={classes.sectionTitle}>
                        <Grid container direction="column" alignItems="center">
                            Projects
                            <img style={{height: '50px'}} src="../underline.png" draggable="false"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={spacing}>
                    {data.allMarkdownRemark.edges.map(post => (<ProjectCard post={post}/>))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Projects;
