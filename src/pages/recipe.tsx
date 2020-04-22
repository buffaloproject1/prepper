import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import './blog.module.css'
import Layout from '../components/layout'

class RecipeIndex extends React.Component<any> {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="hero">Blog</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map((node: any) => {
                return (
                  <li key={node.slug}>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RecipeIndex

export const pageQuery = graphql`
  query AllRecipesQuery {
  allContentfulRecipe(sort: {fields: createdAt, order: DESC}) {
    edges {
      node {
        bannerImage {
          file {
            url
          }
          title
        }
        title
        slug
      }
    }
  }
}
`