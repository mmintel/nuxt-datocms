import fetch from 'node-fetch'

module.exports = function ({ apiKey, url }) {
  return {
    query ({ variables = {}, query }) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          variables,
          query
        })
      }).then(result => result.json())
    }
  }
}
