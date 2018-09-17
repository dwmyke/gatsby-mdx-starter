import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = props => (
  <Layout>
    {props.data.allMdx.edges.map((edge, i) => (
      <Link to={`/${edge.node.parent.name}/`} key={i}>
        {edge.node.parent.name}
      </Link>
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          parent {
            ... on File {
              name
              absolutePath
              relativePath
            }
          }
          timeToRead
          frontmatter {
            title
          }
        }
      }
    }
  }
`
