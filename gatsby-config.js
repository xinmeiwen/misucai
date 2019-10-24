module.exports = {
  siteMetadata: {
    title: `Rosenblog`,
    name: `Martin Rosenberg`,
    siteUrl: `https://martinbrosenberg.com`,
    description: `Martin Rosenberg's website and blog about tech and travel`,
    hero: {
      heading: `Hi. I'm Martin. Let's talk tech. Let's travel the world.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/MartinRosenberg`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/MartinBRosenberg/`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/Marty_Rosenberg`,
      },
     // {
      //   name: `reddit`,
      //   url: `https://www.reddit.com/user/MartinRosenberg`,
      // },
      // {
      //   name: `stackoverflow`,
      //   url: `https://stackoverflow.com/users/2303326/martinrosenberg`,
      // },
    ],
  },
  plugins: [
    {
      resolve: `@narative/gatsby-theme-novela`,
      options: {
        contentPosts: `content/posts`,
        contentAuthors: `content/authors`,
        basePath: `/`,
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rosenblog`,
        short_name: `Rosenblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
