import PropTypes from "prop-types"
import React from "react"
import Typewriter from 'typewriter-effect';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const bgColor = `rgb(20, 35, 75)`
const useStyles = makeStyles({
    header: {
        background: bgColor,
        marginBottom: `6rem`,
    },
    sizing: {
        margin: `0 auto`,
        maxWidth: 1000,
        // padding: `10rem 1rem`,
        padding: `5rem 1rem`,
    },
    heading: {
        marginBottom: 15,
        fontSize: 40,
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
                <Grid container alignItems="center" justify="center" >
                    <Grid item xs={8} style={{paddingBottom: '5rem', background: bgColor}}>
                        This site is under construction while porting to a new layout :)
                        <br />
                        To see a current view of my projects, experience, etc, please visit my <a href="https://www.linkedin.com/in/joshua-kearney/" style={{color: '#2c87f0', textDecoration: 'none'}}>LinkedIn</a>
                    </Grid>

                </Grid>

                <Grid container alignContent="space-between" alignItems="center" justify="center" spacing={10}>
                    <Grid item xs={4}>
                        <h1 className={classes.heading}>
                            Hey, I'm Josh
                        </h1>
                        <Typewriter
                            options={{
                                strings: ['Junior Engineer.', 'Software Developer.', 'Designer & Creator.'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 3000,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <img style={{
                            height: '250px',
                            borderRadius: '50%',
                        }}
                             src="../../me.jpg" />
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
