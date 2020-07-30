import React from 'react';
import { Link, graphql, StaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import classes from '../../assets/scss/modules/blogList.module.scss';

const BlogList = ({ src }) => (
  <>
    <StaticQuery
      query={graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              excerpt(pruneLength: 80)
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 400, fit: COVER, sizes: "") {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                description
                date(formatString: "MMMM DD, YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
      render={(data) => {
        const posts = data.allMarkdownRemark.edges

        return (
          <div className={classes.grid}>
            {posts.map(({ node }) => {
              console.log(node);
              const title = node.frontmatter.title || node.fields.slug
              return (

                <article className={`${classes.blogLinkContainer} ${classes[src]}`} key={node.fields.slug}>
                  <Link className={classes.blogLink} to={node.fields.slug}>
                    <img className={classes.img} src={node.frontmatter.image.childImageSharp.fluid.src} alt="calm down gatsby" />
                    <div className={classes.content}>

                      <header className={classes.header}>
                        <h3>
                          {title}
                        </h3>
                      </header>
                      <section className={classes.section}>
                      {document.documentElement.clientWidth <= 992 ? <p className={classes.date}><strong><small>{node.frontmatter.date}</small></strong></p> : ""}
                        <p
                          dangerouslySetInnerHTML={{
                            __html: node.excerpt,
                          }}
                        />
                        {document.documentElement.clientWidth >= 993 ? <p className={classes.date}><strong><small>{node.frontmatter.date}</small></strong></p> : ""}

                        {document.documentElement.clientWidth <= 992 ? <p className={classes.readMore}>Read More <FontAwesomeIcon className={classes.chevronRight} icon={faChevronRight} /></p> : ""}
                        
                      </section>
                    </div>

                  </Link>

                </article>
              )
            })}
          </div>

        )
      }
      }

    />
  </>

)

export default BlogList;