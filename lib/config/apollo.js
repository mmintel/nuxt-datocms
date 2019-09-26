const { InMemoryCache, IntrospectionFragmentMatcher } = require('apollo-cache-inmemory')

module.exports = function (ctx) {
  let fragmentTypes
  const apiKey = <%= options.apiKey %>
  const httpEndpoint = <%= options.httpEndpoint %>
  if (!apiKey) { throw new Error('apiKey not found.') }
  try {
    fragmentTypes = require('../.cache/fragment-types.json')
  } catch (e) {
    console.error(e)
  }
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: fragmentTypes
  })
  return {
    httpEndpoint,
    getAuth: () => `Bearer ${apiKey}`,
    cache: new InMemoryCache({ fragmentMatcher })
  }
}
