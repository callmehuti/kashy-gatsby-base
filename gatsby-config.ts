import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My First Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,

  // Please add plugins everytime you install them
  plugins: [
    "gatsby-plugin-sharp",
    // I'm trying to use plugin to import and use svg file but it doesn't work for me, so changing to use React from fontawesome.
    "gatsby-plugin-react-svg",
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
          `https://fonts.google.com/`,
        ],
        web: [
          {
            name: [`Sora`, `Poppins`],
          },
        ],
      },
    },
  ],
};

export default config;
