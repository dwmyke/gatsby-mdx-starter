import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = props => (
  <Layout location={props.location}>
    {props.data.allMdx.edges.map((edge, i) => (
      <div key={i}>
        <Link to={`/${edge.node.parent.name}/`}>
          {edge.node.frontmatter.title}
        </Link>
        &nbsp;-&nbsp;
        {edge.node.frontmatter.date}
      </div>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
            author
            date(formatString: "DD MMMM, YYYY")
            tags
          }
        }
      }
    }
  }
`
