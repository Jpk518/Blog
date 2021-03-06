import React from 'react';
import { Link } from "gatsby"
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import {animated, useSpring} from "react-spring";
import BookIcon from '@material-ui/icons/Book';
import IconButton from "@material-ui/core/IconButton";
import cardStyles from "./card-style";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ButtonBase from "@material-ui/core/ButtonBase";
import {useSnackbar} from "notistack";

const BlogCard = ({post}) => {
    const classes = cardStyles();
    const AnimatedCard = animated(Card)
    const { enqueueSnackbar } = useSnackbar();

    const [active, setActive] = React.useState(false);
    const spring = useSpring({
        transform: active ? 'translateY(-5px)' : 'translateY(0px)',
        config: {
            mass: 1,
            tension: 300,
            friction: 20,
            clamp: true
        },
    });

    const cardDetails = () => {
        return enqueueSnackbar('View under construction')
    };

    return (
        <Grid key={ post.node.id } item>
            <AnimatedCard
                className={`${classes.root} ${classes.workColor}`}
                onMouseOver={() => setActive(true)}
                onMouseOut={() => setActive(false)}
                style={spring}
            >
                <ButtonBase onClick={() => cardDetails()}>
                    <CardMedia
                        component="img"
                        alt="Work"
                        height="250"
                        src={post.node.frontmatter.image}
                        draggable="false"
                        title="Work"
                        style={{
                            margin: `0`,
                        }}
                    />
                </ButtonBase>
                <CardContent style={{
                    margin: `0 1vw 0`,
                }}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item >
                            <BookIcon color="secondary"
                                      style={{
                                          margin: `0.5vw 0`,
                                          color: 'FF5F19',
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
                <CardActions style={{
                    margin: `0 1.5vw 0.5vw 1.5vw`,
                }}>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <Typography
                                className={classes.sansFont}
                                color="textSecondary"
                                style={{
                                    fontSize:'14px',
                                }}>
                                {post.node.frontmatter.date}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Link to="/blog/blog-one">
                                <IconButton size="small" >
                                    <AddCircleIcon style={{
                                        fontSize: '32px',
                                        color: '#FF5F19',
                                        borderRadius: '50px'
                                    }}/>
                                </IconButton>
                            </Link>
                        </Grid>
                    </Grid>
                </CardActions>
            </AnimatedCard>
        </Grid>
    );
};

export default BlogCard;
