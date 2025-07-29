/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://atharv-portfolio-ivory.vercel.app', // replace with your actual domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/private-page'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/private-page' },
    ],
  },
};
