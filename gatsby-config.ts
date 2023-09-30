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
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets\/icon/,
        },
      },
    },
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
