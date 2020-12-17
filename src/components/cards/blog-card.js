import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import {animated, useSpring} from "react-spring";
import BookIcon from '@material-ui/icons/Book';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from "@material-ui/core/IconButton";
import cardStyles from "./card-style";

const BlogCard = ({post}) => {
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
                    <BookIcon color="secondary"
                              style={{
                                  margin: `0.5vw 0`,
                              }}/>
                    <Typography className={classes.font} gutterBottom variant="h5"  style={{fontWeight:'bold', fontSize:'30px'}}>
                        {post.node.frontmatter.title}
                    </Typography>
                    <Typography className={classes.font} variant="body2" color="textSecondary">
                        <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
                    </Typography>
                </CardContent>
                <CardActions style={{
                    marginLeft: `1.5vw`,
                }}>
                    <Typography className={classes.font} style={{
                        marginLeft: '17vw'
                    }}>
                        <IconButton color={'secondary'} >
                             <PlayCircleFilledIcon onClick={event => console.log('clicked')}
                                 style={{
                                 fontSize: 40
                             }}/>
                        </IconButton>
                    </Typography>

                </CardActions>
            </AnimatedCard>
        </Grid>
    );
};

export default BlogCard;
