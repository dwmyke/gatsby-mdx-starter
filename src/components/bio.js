import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'

const Bio = ({ data }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: rhythm(2)
    }}
  >
    <div style={{ marginRight: rhythm(0.5) }}>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt={`Mikel-Jon West`}
        style={{ borderRadius: '50%' }}
      />
    </div>
    <div style={{ fontSize: '0.8em' }}>
      Written by <strong>Mikel-Jon West</strong> who lives and works in
      Portland, Oregon. <a href="https://facebook.com/thatmikewest">Facebook</a>
    </div>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 75) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Bio data={data} />}
  />
)
