import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Grid from "@material-ui/core/Grid";
import BlogCard from "./blog-card";

const Blog = () => {
    const [spacing] = React.useState(6);

    const data = useStaticQuery(graphql`
        query {
             allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {type: {eq: "blog"}}}) {
                edges {
                    node {
                    id
                        frontmatter {
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
                <Grid container justify="center" spacing={spacing}>
                    {data.allMarkdownRemark.edges.map(post => (<BlogCard post={post}/>))}
                </Grid>
            </Grid>
        </Grid>
    );
};


export default Blog;
