import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const blogLink = styled(Link)`
  text-decoration: none;
`

const blogTitle = styled.h3`
  margin-buttom: 20px;
  color: blue;
`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Diyar's blog</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <blogLink to={node.fields.slug}>
              <blogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </blogTitle>
            </blogLink>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          internal {
            description
          }
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          id
          html
        }
      }
      totalCount
    }
  }
`
