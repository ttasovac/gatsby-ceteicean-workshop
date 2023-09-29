const { applyxslt } = require("./scripts/applyxslt");

module.exports = {
  siteMetadata: {
    title: "Центар за дигиталне хуманистичке науке",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-postcss",
    // ...
    // `gatsby-theme-ceteicean`, // USE THIS IF YOU DON'T NEED THE OPTIONS BELOW
    {
      resolve: `gatsby-theme-ceteicean`,
      options: {
        applyBefore: [(obj) => applyxslt(obj, "notenumbers.sef.json")],
        applyAfter: [],
        namespaces: {
          "http://www.tei-c.org/ns/1.0": "tei",
          "http://www.tei-c.org/ns/Examples": "teieg",
          "http://www.w3.org/2001/XInclude": "xi",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `static/tei`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `sr`],
        // language file path
        defaultLanguage: `sr`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      },
    },
    {
      resolve: `prism-react-renderer`,
      options: {  
      }
    },
  ],
};
