import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.css'
import '../css/bootstrap-override.css'
import '../css/bootstrap-custom-utils.css'
import '../css/salesbury-lilac.css'
import './index.css'
import socialPic from '../img/social.png'

const Layout = ({ children, data }) => (
  <div className="cheatsheet">
    <Helmet>
      <script async src="https://gumroad.com/js/gumroad.js" />

      <meta name="author" content="Swizec Teller" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      <meta property="og:url" content="https://learnwhileyoupoop.com" />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:image" content={socialPic} />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@swizec" />
      <meta name="twitter:creator" content="@swizec" />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta
        name="twitter:description"
        content={data.site.siteMetadata.description}
      />
      <meta name="twitter:image" content={socialPic} />

      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
