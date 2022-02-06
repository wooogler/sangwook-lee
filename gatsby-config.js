module.exports = {
  siteMetadata: {
    title: `Sangwook Lee`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                'heading[depth=1]': 'text-4xl font-bold',
                'heading[depth=2]': 'text-2xl font-bold',
                'heading[depth=3]': 'text-xl font-bold',
                paragraph: 'text-base',
              },
            },
          },
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 800,
              height: 400,
            },
          },
          `gatsby-remark-external-links`,
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/contents/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `publication`,
        path: `${__dirname}/contents/publication`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `info`,
        path: `${__dirname}/contents/info`,
      },
    },
  ],
};
