require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `Josh Kearney`,
    author: `Josh`,
  },
  plugins: [
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
          }
        ]
      }
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: process.env.GA_TRACKING_ID,
            // Defines where to place the tracking script - `true` in the head and `false` in the body
            head: false,
            anonymize: true,
            respectDNT: true,
            // Delays sending pageview hits on route update (in milliseconds)
            pageTransitionDelay: 0,
            defer: false,
            // Any additional optional fields
            sampleRate: 5,
            siteSpeedSampleRate: 10,
        },
    }
  ],
}
