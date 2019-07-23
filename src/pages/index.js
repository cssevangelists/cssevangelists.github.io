import React from "react"
import { graphql, Link } from "gatsby"
import '../styles/global.css'

export default ({ data }) => {

  return (
    <div> 
      { data.site.siteMetadata.title  }
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`