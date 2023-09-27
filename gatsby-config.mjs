import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });

export default {
  siteMetadata: {
    title: "Breedbook",
    author: "Joe Reza",
    description:
      "An exercise using Gatsby, Contentful, Typescript and styled-components to showcase animals and their breeds.",
    siteUrl: "https://github.com/joereza/gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
  ],
};
