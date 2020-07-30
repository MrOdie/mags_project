import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogList from '../components/BlogList/BlogList';

import classes from '../assets/scss/modules/pages/blogs.module.scss';

const Blogs = () => {
  const { title } = useSiteMetadata()

  return (

    <Layout page="blogsPage">
      <SEO title="Blogs" />
      <section className={classes.gridContainer}>
        <div className={classes.row}>
          <div className={classes.col}>
            <div className={classes.header}>
              <h2 className="h1">The {title}es&#39; <br /> Latest Thoughts:</h2>
            </div>
            <BlogList src="blogsPage" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blogs;