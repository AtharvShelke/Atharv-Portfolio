/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://atharv-portfolio-ivory.vercel.app', 
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/private-page'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
  },
};
