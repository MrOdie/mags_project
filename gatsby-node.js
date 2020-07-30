/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//https://www.google.com/search?safe=active&client=firefox-b-1-d&biw=1920&bih=938&sxsrf=ALeKk00t-A27gHTWr_sZM2x-518ItLKC3A%3A1594726258139&ei=cpcNX6iLCKjBytMP57CSmAc&q=Your+site%27s+%22gatsby-node.js%22+created+a+page+with+a+component+that+doesn%27t+exist.&oq=Your+site%27s+%22gatsby-node.js%22+created+a+page+with+a+component+that+doesn%27t+exist.&gs_lcp=CgZwc3ktYWIQA1AAWABgzOIBaABwAHgBgAEAiAEAkgEAmAEDqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwiojIWh0szqAhWooHIEHWeYBHMQ4dUDCAs&uact=5
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  console.log(blogPost)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
