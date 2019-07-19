import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my first Gatsby Website</h1>
    <p>I am following a tutorial from Traversy Media</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
