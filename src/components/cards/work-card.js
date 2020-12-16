import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {animated, useSpring} from "react-spring";
import WorkIcon from '@material-ui/icons/Work';

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

const WorkCard = ({post}) => {
    const classes = useStyles();
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
                    <WorkIcon color="secondary"
                              style={{
                                  margin: `0.5vw 0`,
                              }}/>
                    <Typography className={classes.font} gutterBottom variant="h5"  style={{fontWeight:'bold', fontSize:'30px'}}>
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
            </AnimatedCard>
        </Grid>
    );
};

export default WorkCard;
