require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `Josh Kearney`,
    author: `Josh`,
  },
    plugins: [
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: process.env.GA_TRACKING_ID,
              head: false,
              anonymize: true,
          },
      },
      `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `data`,
              path: `${__dirname}/data`,
          },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      'gatsby-plugin-catch-links',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: `${__dirname}/src/pages`,
              name: 'pages'
          }
          },
      'gatsby-transformer-remark',
      {
          resolve: `gatsby-plugin-google-fonts-v2`,
          options: {
              fonts: [
                  {
                      family: 'Castoro',
                  },
                  {
                      family: 'Playfair+Display'
                  },
                  {
                      family: 'Montserrat'
                  }
                  ]
          }

      }
  ],
}
