/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from "./partials/header"
import Footer from "./partials/footer"
import '../assets/scss/style.scss';
import "../assets/font/typography.css";

import classes from "../assets/scss/modules/layout.module.scss";

const Layout = ({ children, page }) => {

  return (
    <>
      <ParallaxProvider>
        <main className={classes.main} id={page}>
          <Header page={page} />
          {children}
          <Footer />
        </main>
      </ParallaxProvider>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
