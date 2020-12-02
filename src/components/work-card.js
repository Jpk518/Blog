import React from 'react';
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minWidth: '10vw',
        maxWidth: 360,
        border: 'none',
        boxShadow: 'none',
        background: '#fde6f0',
        color: '#2253d6'
    },
    title: {
        fontSize: 14,
    }
});

const WorkCard = () => {
    const classes = useStyles();
    return (
      <Card className={classes.root} >
          <CardActionArea>
              <CardMedia
                  component="img"
                  alt="Space"
                  height="200"
                  image="/images/space.jpg"
                  title="Space"
                  style={{
                      margin: `0`,
                  }}
              />
              <CardContent style={{
                  margin: `1vw`,
              }}>
                  <Typography gutterBottom variant="h3" component="h2">
                      Space
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      Space is cool
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa debitis dolorum ea eum facilis, illo laudantium molestiae omnis quo soluta veritatis voluptas. Aliquam architecto consequuntur dolore dolorem doloribus, fugiat!
                  </Typography>
              </CardContent>
          </CardActionArea>
      </Card>
    );
};

export default WorkCard;
