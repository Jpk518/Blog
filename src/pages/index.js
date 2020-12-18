import React from "react"

import Layout from "../components/layout"
import Work from "../components/cards/work";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {HashRouter, Link} from "react-router-dom";
import './index.css'
import Projects from "../components/cards/projects";

const IndexPage = () => {
    return (
        <HashRouter hashType="noslash">
            <Layout style={{background: 'rgb(20, 35, 75)'}}>
                {/*<Blog/>*/}
                <Grid container
                      spacing={6}
                      justify="center"
                      alignContent="center"
                      style={{
                          background: '#ffffff',
                          height: '4rem',
                          marginBottom: '3rem'
                }}>
                    <Grid item >
                        <a href="#work" style={{ textDecoration: 'none' }}>
                            <Typography variant="h5" style={{color: '#1b3c95', fontFamily: 'Open Sans'}}>
                                Work
                            </Typography>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="#project" style={{ textDecoration: 'none' }}>
                            <Typography variant="h5" style={{color: '#1b3c95', fontFamily: 'Open Sans'}}>
                                Projects
                            </Typography>
                        </a>
                    </Grid>
                </Grid>
                <Work />
                <Projects />

            </Layout>
        </HashRouter>
    )
}

export default IndexPage
