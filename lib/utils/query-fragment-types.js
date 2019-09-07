const path = require('path')
const fse = require('fs-extra')
const graphqlClient = require('./graphql')

module.exports = function ({ apiKey, httpEndpoint }) {
  const client = graphqlClient({
    apiKey,
    url: httpEndpoint
  })
  return new Promise((resolve, reject) => {
    client.query({
      query: `
        query {
          __schema {
            types {
              kind
              name
              possibleTypes {
                name
              }
            }
          }
        }
      `
    }).then((result) => {
      const filteredData = result.data.__schema.types.filter(
        type => type.possibleTypes !== null
      )
      result.data.__schema.types = filteredData
      const filePath = path.resolve(__dirname, '..', '.cache', 'fragment-types.json')
      try {
        fse.outputFileSync(filePath, JSON.stringify(result.data))
        console.log('Schema extracted successfully.')
        console.log('Restart nuxt if you expierence problems with heuristic fragment matching.')
        resolve()
      } catch (err) {
        reject(new Error('Error writing fragmentTypes file', err))
      }
    })
  })
}
