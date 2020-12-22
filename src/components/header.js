import PropTypes from "prop-types"
import React from "react"
import Typewriter from 'typewriter-effect';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const bgColor = `#4D202F` //4D202F
const useStyles = makeStyles({
    header: {
        background: bgColor,
    },
    sizing: {
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `5rem 1rem`,
    },
    heading: {
        fontFamily: 'Playfair Display',
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 44,
    },
    footer: {
        background: bgColor,
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <div className={classes.sizing}>

                <Grid container alignContent="space-between" alignItems="center" justify="center" spacing={10}>
                    <Grid item xs={12} s={4} md={4} lg={4} >
                        <Grid container justify="center">
                            <Grid item>
                                    <h1 className={classes.heading}>
                                        Hey, I'm Josh
                                    </h1>
                                    <Typewriter
                                        options={{
                                            strings: ['Software Engineer.', 'Cloud Architect.', 'Designer & Creator.'],
                                            autoStart: true,
                                            loop: true,
                                            pauseFor: 3000,
                                        }}
                                    />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} s={4} md={4} lg={4}>
                        <Grid container direction="column" alignItems="center">
                            <Grid item>
                                <img style={{height: '225px', borderRadius: '50%'}} src="../../joshua-kearney.jpg" />
                            </Grid>
                            <Grid item><Button href="../../resume.pdf" variant="outlined" color="inherit" style={{borderRadius: '0'}}> Resume </Button></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </header>
    )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
