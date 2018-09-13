import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { MDXProvider } from '@mdx-js/tag'
import Header from './header'
import './layout.css'

const ReactCodeSandbox = ({ children }) => (
  <LiveProvider code={children}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

const Layout = ({ children }) => (
  <MDXProvider components={{ code: ReactCodeSandbox }}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' }
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0
            }}
          >
            {children}
          </div>
        </>
      )}
    />
  </MDXProvider>
)

ReactCodeSandbox.propTypes = {
  children: PropTypes.node.isRequired
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
