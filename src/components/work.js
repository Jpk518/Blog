import React from 'react';
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {graphql, useStaticQuery} from "gatsby";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
    root: {
        minWidth: '10vw',
        maxWidth: 400,
        minHeight: 500,
        border: 'none',
        boxShadow: 'none',
        background: '#fde6f0',
        color: '#2253d6'
    },
    title: {
        fontSize: 14,
    },
    font: {
        fontFamily: 'Castoro',
    },
});

const Work = () => {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(6);

    const data = useStaticQuery(graphql`
        query {
             allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
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
                    {data.allMarkdownRemark.edges.map(post => (
                        <Grid key={ post.node.id } item>
                            <Card className={classes.root} >
                                <CardMedia
                                    component="img"
                                    alt="Work"
                                    height="300"
                                    src={post.node.frontmatter.image}
                                    title="Work"
                                    style={{
                                        margin: `0`,
                                    }}
                                />
                                <CardContent style={{
                                    margin: `1vw 1vw 0`,
                                }}>
                                    <Typography className={classes.font} gutterBottom variant="h5"  style={{fontWeight:'bold'}}>
                                        {post.node.frontmatter.company}
                                    </Typography>
                                    <Typography className={classes.font} variant="body2" color="textSecondary">
                                        <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
                                    </Typography>
                                </CardContent>
                                <CardActions style={{
                                    marginLeft: `1.5vw`,
                                }}>
                                    <Typography className={classes.font} style={{
                                    }}>
                                        {post.node.frontmatter.dates}
                                    </Typography>
                                    <Typography className={classes.font} style={{
                                        marginLeft: `3vw`,
                                    }}>
                                        {post.node.frontmatter.location}
                                    </Typography>

                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};


export default Work;
