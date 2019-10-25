module.exports = {
  siteMetadata: {
    title: `觅素材`,
    name: `Frank`,
    siteUrl: `https://misucai.com`,
    description: `介绍有关创建网站的最新信息。`,
    hero: {
      heading: `介绍有关创建网站的最新信息。`,
      maxWidth: 752,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/misucai`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/misucai/`,
      },
      {
        name: `paypal`,
        url: `https://paypal.me/misucai`,
      },
      {
        name: `stackoverflow`,
        url: `https://stackoverflow.com/users/2303326/misucai`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/misucai`,
      },
      // {
      //   name: `reddit`,
      //   url: `https://www.reddit.com/user/misucai`,
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
}
