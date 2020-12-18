import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import {animated, useSpring} from "react-spring";
import WorkIcon from '@material-ui/icons/Work';
import cardStyles from "./card-style";

const WorkCard = ({post}) => {
    const classes = cardStyles();
    const AnimatedCard = animated(Card)
    const [active, setActive] = React.useState(false);
    const spring = useSpring({
        transform: active ? 'translateY(-10px)' : 'translateY(0px)',
        config: {
            mass: 1,
            tension: 300,
            friction: 20,
            clamp: true
        },
    });
    return (
        <Grid key={ post.node.id } item>
            <AnimatedCard
                className={classes.root}
                onMouseOver={() => setActive(true)}
                onMouseOut={() => setActive(false)}
                style={spring}
            >
                <CardMedia
                    component="img"
                    alt="Work"
                    height="250"
                    src={post.node.frontmatter.image}
                    title="Work"
                    style={{
                        margin: `0`,
                    }}
                />
                <CardContent style={{
                    margin: `0 1vw 0`,
                }}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item >
                        <WorkIcon color="secondary"
                                  style={{
                                      margin: `0.5vw 0`,
                                      // fontSize: '30px'
                                  }}/>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.font} variant="body2" >
                                {post.node.frontmatter.typeHeader}
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <Typography className={classes.font}  variant="h5"  style={{
                                fontWeight:'bold',
                                fontSize:'32px',
                                color: '#2253d6'
                            }}>
                                {post.node.frontmatter.company}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="space-between"  alignItems="center" spacing={1} style={{
                        color:'#1b3c95',
                        paddingBottom: '0.5rem'
                    }}>
                        <Grid item>
                            <Typography className={classes.sansFont} variant="body2" style={{fontWeight:'bold'}}>
                                {post.node.frontmatter.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.sansFont} variant="body2" style={{fontWeight:'bold'}}>
                                {post.node.frontmatter.location}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography
                        className={classes.sansFont}
                        variant="body2"
                        style={{
                            fontSize: '14px',
                        }}
                    >
                        <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
                    </Typography>
                </CardContent>
                <CardActions style={{
                    marginLeft: `1.5vw`,
                }}>
                    <Typography
                        className={classes.sansFont}
                        color="textSecondary"
                        style={{
                            fontSize:'14px',
                            padding: '0.5rem 0'
                    }}>
                        {post.node.frontmatter.dates}
                    </Typography>
                </CardActions>
            </AnimatedCard>
        </Grid>
    );
};

export default WorkCard;
