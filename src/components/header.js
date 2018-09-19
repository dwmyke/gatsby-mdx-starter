import React from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import { rhythm, scale } from '../utils/typography'
import PropTypes from 'prop-types'

const Header = ({ siteTitle, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  if (location.pathname === rootPath) {
    return (
      <Headroom
        style={{
          margin: '0 auto',
          maxWidth: rhythm(24),
          background: 'white',
          boxShadow: '0px 15px 10px -15px gray'
        }}
      >
        <div
          style={{
            ...scale(1.5),
            padding: `${rhythm(0.25)} ${rhythm(0.5)}`
          }}
        >
          <Link
            to="/"
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            {siteTitle}
          </Link>
        </div>
      </Headroom>
    )
  } else {
    return (
      <Headroom
        style={{
          margin: '0 auto',
          maxWidth: rhythm(24),
          background: 'white',
          boxShadow: '0px 15px 10px -15px gray'
        }}
      >
        <div
          style={{
            ...scale(1),
            padding: `${rhythm(0.25)} ${rhythm(0.5)}`
          }}
        >
          <Link
            to="/"
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            {siteTitle}
          </Link>
        </div>
      </Headroom>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

export default Header
