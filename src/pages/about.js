import React from "react"
import Layout from "../components/layout"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

const About = () => {
  const intl = useIntl();
  return (
    <Layout location="about">
      <h2 className="text-3xl font-bold underline">
        {intl.formatMessage({ id: "about-my-edition" })}
      </h2>
      <div>
        <p>Some information.</p>
      </div>
    </Layout>
  );
}

export default About
