import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({ data, test }) => {
  return (
    <>
      <StaticQuery
        query={graphql`  query {
        file(relativePath: { eq: "parallax.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 2500, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }`}
        render={(data) => (
          <Img fluid={data.file.childImageSharp.fluid} />
        )}

      />
    </>
  )

}

export default Image