import React from "react"

import Layout from "../components/layout"
import Work from "../components/cards/work";
import './index.css'
import Projects from "../components/cards/projects";
import {SnackbarProvider} from "notistack";

const IndexPage = () => {
    return (
        <SnackbarProvider maxSnack={3}>
            <Layout style={{background: 'rgb(20, 35, 75)'}}>
                <Work />
                <Projects />
            </Layout>
        </SnackbarProvider>
    )
}

export default IndexPage
