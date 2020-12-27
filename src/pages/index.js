import React from "react"
import Layout from "../components/layout"
import Work from "../components/cards/work";
import './index.css'
import Projects from "../components/cards/projects";
import {SnackbarProvider} from "notistack";
import Blog from "../components/cards/blog";

const IndexPage = () => {
    return (
        <SnackbarProvider maxSnack={3}>
            <Layout >
                <Work />
                <Projects />
                <Blog />
            </Layout>
        </SnackbarProvider>
    )
}

export default IndexPage
