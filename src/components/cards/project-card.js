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

const ProjectCard = ({post}) => {
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
                className={`${classes.root} ${classes.projectColor}`}
                onMouseOver={() => setActive(true)}
                onMouseOut={() => setActive(false)}
                raised="true"
                style={spring}
            >
                <CardMedia
                    component="img"
                    alt="Project"
                    height="375"
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
                                          // color: 'FF5F19',
                                      }}/>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.font} color="textSecondary" variant="body2" >
                                {post.node.frontmatter.typeHeader}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography className={classes.font} gutterBottom variant="h5"  style={{fontWeight:'bold', fontSize:'30px'}}>
                        {post.node.frontmatter.title}
                    </Typography>
                    <Typography className={classes.sansFont} variant="body2" color="textSecondary">
                        <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
                    </Typography>
                </CardContent>
            </AnimatedCard>
        </Grid>
    );
};

export default ProjectCard;
