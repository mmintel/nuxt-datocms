jest.setTimeout(60000)
const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')

const config = require('../example/nuxt.config')
const server = require('./support/server')

config.dev = false

let nuxt, port

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

// describe('without apiKey', () => {
//   it('should throw an error without apiKey', async () => {
//     nuxt = new Nuxt(config)
//     expect(nuxt.ready).toThrow()
//   })
// })

describe('with correct settings', () => {
  beforeAll(async () => {
    const testPort = 4999
    server.listen(testPort)
    nuxt = new Nuxt({
      ...config,
      datocms: {
        httpEndpoint: `http://localhost:${testPort}`,
        apiKey: '1234'
      }
    })
    await nuxt.ready()
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  it('should render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })
})
