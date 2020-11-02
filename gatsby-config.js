module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Princeton Living Water`,
    description: `Website for Princeton Living Water`,
    author: `Princeton Living Water`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `devos`,
        path: `${__dirname}/src/assets/devos`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `livingwater-favicon`,
        short_name: `favicon`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/favicons/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-162513646-1",
        head: true,
      },
    },
  ],
};
