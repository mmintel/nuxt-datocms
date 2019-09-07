const { resolve } = require('path')
const queryFragmentTypes = require('./utils/query-fragment-types')

module.exports = async function (moduleOptions) {
  const options = {
    ...{
      httpEndpoint: 'https://graphql.datocms.com'
    },
    ...this.options.datocms,
    ...moduleOptions
  }

  if (!options.apiKey) {
    throw new Error('Must provide apiKey.')
  }

  this.options.env = {
    ...this.options.env,
    ...options
  }

  await queryFragmentTypes({ apiKey: options.apiKey, httpEndpoint: options.httpEndpoint })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'datocms.js',
    options
  })

  this.requireModule(['@nuxtjs/apollo', {
    clientConfigs: {
      default: resolve(__dirname, './config/apollo.js')
    }
  }])
}

module.exports.meta = require('../package.json')
