import * as React from "react";
import Layout from "../Components/layout.js";
import { StaticImage } from "gatsby-plugin-image";
import HeroPage from "./hero.js";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    // <Layout pageTitle="Home Page" titlePage={data.site.siteMetadata.title}>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    //   <StaticImage
    //     alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
    //     // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
    //     src="../images/icon.png"
    //   />
    // </Layout>
    <HeroPage></HeroPage>
  );
};

export default IndexPage;
