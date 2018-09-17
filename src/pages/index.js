import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/mdx/">Go to mdx</Link>
    <br />
    <Link to="/styled-components/">Go to styled-components</Link>
    <br />
    <Link to="/react-live/">Go to react-live</Link>
  </Layout>
)

export default IndexPage
