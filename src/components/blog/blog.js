import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "gatsby"

import makeStyles from '@material-ui/core/styles/makeStyles';
import {OutboundLink} from "gatsby-plugin-google-analytics";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
        paddingTop: '3.2vw',
    },
    card: {
        height: '94vh',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        backgroundColor: primaryColor,
        color: textColor,
        position: 'relative'
    },
    header: {
        paddingTop: '1.5rem',
        paddingLeft: '1rem',
        fontFamily: 'Playfair Display',
        fontWeight: 'bold',
        fontSize: '42px',
    },
    headerTwo: {
        fontFamily: 'Playfair Display',
        fontWeight: 'bold',
        fontSize: '32px',
    },
    scroll: {
        overflow: 'scroll',
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
        position: 'absolute',
    },
    p: {
       fontFamily: 'Montserrat',
       fontSize: '16px',
    },
});

const Blog = () => {
    const classes = blogStyles();
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
                <Grid container justify="space-around" className={classes.layout}>
                    <Grid item xs={11} md={9} lg={7} >
                        <Grid className={classes.card}>
                                <Grid item className={classes.scroll}>
                                    <Grid container direction="column" alignItems="center" spacing={2} style={{marginTop:'3rem'}}>
                                        <Grid item container className={classes.header} style={{width: '35vw'}}>
                                            My Fav Songs In All 2020
                                        </Grid>
                                        <Grid item container className={classes.headerTwo} style={{width: '35vw', marginTop:'1rem'}}>
                                            <img height="100%" src="../../music.jpg"/>
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
                    </Grid>
            </Grid>
        </div>
    );
};

export default Blog;
