import React from 'react'
import { graphql } from 'gatsby'
import Bio from '../components/bio'
import Link from '../components/link'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <Bio />
    {data.allMdx.edges.map(({ node }) => (
      <div key={node.id}>
        <h4
          style={{
            marginBottom: rhythm(1 / 4)
          }}
        >
          <Link to={`/${node.parent.name}/`}>
            {node.frontmatter.title || node.parent.name}
          </Link>
        </h4>
        <small>{node.frontmatter.date}</small>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
          id
          excerpt
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
            draft
            date(formatString: "DD MMMM, YYYY")
            tags
          }
        }
      }
    }
  }
`
