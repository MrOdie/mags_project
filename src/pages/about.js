import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SingleColumn from '../components/singleColumn';

import { ParallaxBanner } from 'react-scroll-parallax';
import { useSiteMetadata } from '../hooks/use-site-metadata';

import largeImage from '../assets/images/about_parallax_bg_1920.jpg';
import tabletImage from '../assets/images/about_parallax_bg_992.jpg';

const About = () => {
  const {title} = useSiteMetadata();
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(document.documentElement.clientWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })
  const imageUrl = windowWidth >= 993 ? largeImage : tabletImage;
  return (
    <Layout page="aboutPage">
      <SEO title="About"/>
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            image: imageUrl,
            amount: 0.3,
          }
        ]}
        style={{
          height: '500px',
        }}
      >
      </ParallaxBanner>
      <SingleColumn>
        <h2 className="h1">{title}</h2>
      </SingleColumn>
    </Layout>
  )
}

export default About