import React from 'react';
import Grid from "@material-ui/core/Grid";
import {graphql, Link, useStaticQuery} from "gatsby"

import makeStyles from '@material-ui/core/styles/makeStyles';
import {OutboundLink} from "gatsby-plugin-google-analytics";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Divider from "@material-ui/core/Divider";

const primaryColor = '#FFFFFF';
const textColor = '#000000';
const blogStyles = makeStyles({
    background: {
        height: '100vh',
        background: '#F0F5F5',
    },
    heading: {
        background: '#221E1F',
        height: '6vh',
        position: 'fixed'
    },
    headingGrid: {
        width: '97.5%',
    },
    returnBox: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: '20px',
        color: primaryColor,
    },
    layout: {
        paddingTop: '6vh', // 6 for top
    },
    card: {
        height: '94vh',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        backgroundColor: primaryColor,
        color: textColor,
        position: 'relative'
    },
    header: {
        fontFamily: 'Playfair Display',
        // fontWeight: 'bold',
        fontSize: '42px',
        lineHeight: '1.2',
        margin: '1rem'
    },
    headerTwo: {
        fontFamily: 'Playfair Display',
        fontWeight: 'bold',
        fontSize: '20px',
        margin: '1vw'
    },
    scroll: {
        overflow: 'scroll',
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
    },
    p: {
        fontFamily: 'Charter BT',
        fontSize: '20px',
        margin: '1rem'
    },
});

const Blog = () => {
    const classes = blogStyles();

    const data = useStaticQuery(graphql`
        query {
             allMarkdownRemark(sort: {order: DESC, fields: frontmatter___rank}, filter: {frontmatter: {type: {eq: "songs"}}}) {
                edges {
                    node {
                    id
                        frontmatter {
                          rank
                          artist
                          song
                          image
                        }
                    html
                    }
                }
            }
        }
    `)

    return (
        <div className={classes.background}>
            <Grid container justify="center" className={classes.heading}>
                <Grid container className={classes.headingGrid} alignItems="center" justify="space-between" >
                    <Grid item>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Grid container className={classes.returnBox} >
                                <ArrowBackIcon />
                                <div style={{paddingLeft: '1vw'}}>
                                    Return To Home
                                </div>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2} >
                            <Grid item>
                                <OutboundLink href="https://www.goodreads.com/user/show/41209622-josh-kearney"><img height="100%" src="../../book.svg"/></OutboundLink>
                            </Grid>
                            <Grid item>
                                <OutboundLink href="https://www.linkedin.com/in/joshua-kearney/"><img height="100%" src="../../linkedin.svg"/></OutboundLink>
                            </Grid>
                            <Grid item>
                                <OutboundLink href="https://github.com/Jpk518"><img height="100%" src="../../github.svg"/></OutboundLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
                <Grid container justify="center" className={classes.layout}>
                    <Grid id="center-card" item xs={11} md={9} lg={7} className={classes.card}>
                        <Grid container justify="center" className={classes.scroll} >
                            <Grid container direction="column" xs={12} lg={8} spacing={2} style={{marginTop:'3rem', marginBottom:'3rem'}}>
                                <Grid item className={classes.header}>
                                    My Top 10 Songs of 2020 <br /> Retrospective of a Year in Music
                                </Grid>
                                <Grid item justify="center" lg={11} style={{marginLeft: '1rem'}} >
                                    <img height="250" width="100%" src="../../music.jpg"/>
                                </Grid>
                                <Grid item className={classes.p} >
                                    With less to do in 2020 it was a bigger year for music, with a lot more songs consumed in my end of the woods. With that, here's a list of my top songs of the year.
                                </Grid>
                                <Divider style={{marginBottom: '2rem'}}/>

                                {data.allMarkdownRemark.edges.map(post => (
                                    <div>
                                        <Grid container>
                                            <Grid item xs={5} ><img width="220px" src={post.node.frontmatter.image}/></Grid>
                                            <Grid xs={7} container direction="column">
                                                <Grid item className={classes.headerTwo}>{post.node.frontmatter.rank}.</Grid>
                                                <Grid item className={classes.headerTwo}>{post.node.frontmatter.artist}: "{post.node.frontmatter.song}"</Grid>
                                            </Grid>
                                        </Grid>
                                        <Divider style={{marginBottom: '2rem',}}/>
                                    </div>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
        </div>
    );
};

export default Blog;
