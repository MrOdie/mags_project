import React, { useState, useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import tabletImage from '../../assets/images/contact_parallax_bg_992.jpg';
import largeImage from '../../assets/images/contact_parallax_bg_1920.jpg';

const ParallaxContainer = ({ imageName }) => {
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
  const imageUrl = windowWidth >= 950 ? largeImage : tabletImage;

  return (
    <>
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
      {/* <Parallax className="custom-class" y={[-100, 73]} tagOuter="figure">
        <img className="parallax-img" src={imageUrl} alt="Purple Castle" />
      </Parallax> */}
    </>
  )
}

export default ParallaxContainer;