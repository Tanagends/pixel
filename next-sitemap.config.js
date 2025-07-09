/** @type {import('next-sitemap').IConfig} */
const {products} = require('./components/products');
const {allGuides} = require('./components/guides');
// import products from './components/products';
// import allGuides from './components/guides';

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://clickys.in',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  trailingSlash: false,
    exclude: [
        '/not-found',
        '/error',
        '/services',
        '/schoolpromo'
    ],
}