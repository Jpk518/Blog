import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Grid from "@material-ui/core/Grid";
import cardStyles from "./card-style";
import BlogCard from "./blog-card";

const Blog = () => {
    const [spacing] = React.useState(6);
    const classes = cardStyles();

    const data = useStaticQuery(graphql`
        query {
             allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {type: {eq: "blog"}}}) {
                edges {
                    node {
                    id
                        frontmatter {
                            typeHeader
                          title
                          date
                          image
                        }
                    html
                    }
                }
            }
        }
    `)

    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item className={classes.sectionTitle}>
                        <Grid container direction="column" alignItems="center">
                            Blog
                            <img style={{height: '50px'}} src="../underline.png" draggable="false"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={spacing}>
                    <Grid container justify="center" style={{color: 'black'}}>Section Under Construction </Grid>
                    {data.allMarkdownRemark.edges.map(post => (<BlogCard post={post}/>))}
                </Grid>
            </Grid>
        </Grid>
    );
};


export default Blog;
