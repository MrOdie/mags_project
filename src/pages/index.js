import React from "react"
import SEO from "../components/seo";
import Layout from "../components/layout"

import classes from '../assets/scss/modules/pages/index.module.scss';

const IndexPage = () => {

  return (
    <Layout page="homePage">
      <SEO title="Home" />
      <section id={classes.intro}>
        <article className={classes.articleLeft}>
          <div className={classes.container}>
            <div className={classes.inner}>
              <h4 className="h1">Catholicism &amp; Disney Princesses</h4>
              <p>This is a small corner of the internet that is dedicated to exploring the Catholicity of Disney Princesses</p>
              <p>Do you love Catholicism?</p>
              <p><strong>I do.</strong></p>
              <p>Do you love Disney Princesses?</p>
              <p><strong>Me too!</strong></p>
              <p>Feel free to join me on my exploration of Disney Princesses through a Catholic lense.</p>
              <p>Just as Truth is absolute, Disney Princesses are absolutely amazing.</p>
            </div>
          </div>
        </article>
        <article className={classes.articleRight}></article>
      </section>
    </Layout>
  )
}

export default IndexPage
