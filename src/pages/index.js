import React from "react"

import Layout from "../components/layout"
import Work from "../components/cards/work";

const IndexPage = () => {
    return (
        <Layout style={{background: 'rgb(20, 35, 75)'}}>
            {/*<Blog/>*/}
            <Work/>
        </Layout>
    )
}

export default IndexPage
