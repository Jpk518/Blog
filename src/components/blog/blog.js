import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "gatsby"

import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from "@material-ui/core/Card";
import {OutboundLink} from "gatsby-plugin-google-analytics";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CardMedia from "@material-ui/core/CardMedia";

const primaryColor = '#FFFFFF';
const secondaryColor = '#161B22';
const tertiaryColor = '#4D202F';
const textColor = '#444444';
const ylwColor = '#FEEACC';
const blueColor = '#FEEACC';
const blogStyles = makeStyles({
    heading: {
        background: '#221E1F',
        height: '3rem',
        paddingTop: '2.5rem',
    },
    background: {
        width: '100vw',
        height: '100vh',
        background: '#F0F5F5',
    },
    layout: {
        height: '100vh',
        width: '95vw',
        marginLeft: '2.5vw',
        marginTop: '2.5vw',
        position: 'fixed',
    },
    card: {
        // boxShadow: 'none',
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        height: '87.5vh',
        borderRadius: '10px',
    },
    titleCard: {
        width: '30vw',
        color: textColor, //#F0F5F5
        backgroundColor: ylwColor, //4D202F
    },
    returnBox: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: '20px',
        padding: '1.2vw',
        color: secondaryColor,
        '&:hover': {
            color: ylwColor,
            background: tertiaryColor,
        },
    },
    header: {
        paddingTop: '1.5rem',
        paddingLeft: '1rem',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: '42px',
    },
    headerTwo: {
        fontFamily: 'Playfair Display',
        fontWeight: 'bold',
        fontSize: '32px',
    },
    baseCard: {
        // backgroundColor: '#fff2df',
        backgroundColor: primaryColor,
        color: textColor,
        width: '62.5vw',
        position: 'relative'
    },
    scroll: {
        flexGrow: '1',
        overflow: 'scroll',
        height: '100%',
        width: '62.5vw',
        overflowX: 'hidden',
        position: 'absolute',
    },
    p: {
       fontFamily: 'Montserrat',
    },
});

const Blog = () => {
    const classes = blogStyles();
    return (
        <div className={classes.background}>
            <Grid
                container
                className={classes.heading}
                justify="center"
                alignContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <OutboundLink href="https://www.goodreads.com/user/show/41209622-josh-kearney"><img src="../../book.svg"/></OutboundLink>
                </Grid>
                <Grid item>
                    <OutboundLink href="https://www.linkedin.com/in/joshua-kearney/"><img src="../../linkedin.svg"/></OutboundLink>
                </Grid>
                <Grid item>
                    <OutboundLink href="https://github.com/Jpk518"><img src="../../github.svg"/></OutboundLink>
                </Grid>
            </Grid>
            <Grid container justify="space-between" className={classes.layout}>
                <Grid item >
                    <Card className={`${classes.card} ${classes.titleCard}`}>
                        <CardMedia
                            component="img"
                            alt="img"
                            height="250"
                            src={"../../music.jpg"}
                            draggable="false"
                            title="Work"
                            style={{
                                margin: `0`,
                            }}
                        />
                        <Grid container direction="column" justify="space-between" style={{height: '68%'}} >
                            <Grid item s={6}>
                                <Grid container className={classes.header}>
                                    My Top Songs 2020
                                </Grid>
                            </Grid>

                            <Grid item >
                                <Link to="/" style={{textDecoration: 'none'}}>
                                <Grid container className={classes.returnBox} >
                                    <ArrowBackIcon />
                                    <div style={{paddingLeft: '1vw'}}>
                                        Return To Home
                                    </div>
                                </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item >
                    <Card className={`${classes.card} ${classes.baseCard}`}>
                            <Grid container justify="center" >
                                <Grid item className={classes.scroll}>
                                <Grid container direction="column" alignItems="center" spacing={2} style={{marginTop:'3rem',}}>
                                        <Grid item container className={classes.headerTwo} justify="center" style={{width: '35vw'}}>
                                            Problem
                                        </Grid>
                                        <Grid item container className={classes.p} justify="center" style={{width: '35vw'}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum dolore dolorem eligendi, eum ex hic illo illum magnam nostrum obcaecati officia possimus quia quibusdam rem sapiente, sint totam ullam veniam vero. Accusantium adipisci dignissimos hic nobis, officia sapiente unde?
                                        </Grid>
                                        <Grid item className={classes.p} justify="center" style={{width: '35vw'}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem maxime nulla obcaecati provident quibusdam tempore veniam voluptate. Consequatur deleniti dignissimos minima recusandae saepe. A ab, atque autem delectus deleniti eos libero maxime minus natus neque, non obcaecati perspiciatis quod rem repellendus repudiandae rerum voluptatum? Alias at consectetur cum cupiditate doloremque ea eos et fuga id impedit inventore, labore maiores nesciunt perspiciatis reiciendis rerum sit suscipit voluptas! Atque delectus dolore doloribus iure, quisquam quos ratione ullam vitae? Alias animi aut, debitis delectus deserunt nihil, pariatur porro sed similique tempora vel vitae? Dolor expedita fugiat in officiis quisquam reiciendis, vero? Accusamus animi eveniet facere facilis itaque labore mollitia odit placeat repellat veniam! Alias aspernatur dolorum ea earum eligendi eum fuga in ipsa iure, minus molestiae necessitatibus numquam qui quidem repellat rerum sapiente suscipit ut velit veniam. Atque porro rerum voluptatem? Ad alias aperiam deleniti dolor et eveniet, laborum modi molestias nam perferendis porro quaerat, quas quisquam quod repellendus repudiandae suscipit tempora voluptas. Aut dolorum ex magni modi necessitatibus nisi optio quae repellat similique suscipit tenetur, vel veritatis. Ab distinctio ducimus, earum eligendi excepturi exercitationem fugiat illo inventore laborum maiores nam optio possimus praesentium quo reiciendis reprehenderit suscipit temporibus unde veniam voluptate!
                                        </Grid>
                                        <Grid item className={classes.p} justify="center" style={{width: '35vw'}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem maxime nulla obcaecati provident quibusdam tempore veniam voluptate. Consequatur deleniti dignissimos minima recusandae saepe. A ab, atque autem delectus deleniti eos libero maxime minus natus neque, non obcaecati perspiciatis quod rem repellendus repudiandae rerum voluptatum? Alias at consectetur cum cupiditate doloremque ea eos et fuga id impedit inventore, labore maiores nesciunt perspiciatis reiciendis rerum sit suscipit voluptas! Atque delectus dolore doloribus iure, quisquam quos ratione ullam vitae? Alias animi aut, debitis delectus deserunt nihil, pariatur porro sed similique tempora vel vitae? Dolor expedita fugiat in officiis quisquam reiciendis, vero? Accusamus animi eveniet facere facilis itaque labore mollitia odit placeat repellat veniam! Alias aspernatur dolorum ea earum eligendi eum fuga in ipsa iure, minus molestiae necessitatibus numquam qui quidem repellat rerum sapiente suscipit ut velit veniam. Atque porro rerum voluptatem? Ad alias aperiam deleniti dolor et eveniet, laborum modi molestias nam perferendis porro quaerat, quas quisquam quod repellendus repudiandae suscipit tempora voluptas. Aut dolorum ex magni modi necessitatibus nisi optio quae repellat similique suscipit tenetur, vel veritatis. Ab distinctio ducimus, earum eligendi excepturi exercitationem fugiat illo inventore laborum maiores nam optio possimus praesentium quo reiciendis reprehenderit suscipit temporibus unde veniam voluptate!
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Blog;
